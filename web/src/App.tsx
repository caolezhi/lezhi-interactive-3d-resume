import { Suspense, lazy } from 'react'
import { biography, projects } from './content'
import './styles.css'

const Scene = lazy(() => import('./Scene'))
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '↓'}</span>
}

export default function App() {
  return <>
    <header className="topbar">
      <a className="brand" href="#home" aria-label="返回首页">乐之 <span className="brand-dot">✳</span></a>
      <nav aria-label="页面导航">
        <a href="#about">关于我</a>
        <a href="#works">作品</a>
        <a href="https://github.com/caolezhi" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
      </nav>
    </header>

    <main>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-visual" aria-label="乐之的互动 3D 形象，眼睛和头会跟随鼠标，并自然眨眼">
          <Suspense fallback={<div className="model-loading">正在加载 3D 人物…</div>}><Scene /></Suspense>
          <div className="portrait-floor" aria-hidden="true" />
        </div>
        <div className="hero-content">
          <p className="eyebrow"><span className="status-dot" /> AI CREATOR · CHANGSHA, CHINA</p>
          <h1 id="hero-title">你好，<br />我是<span>乐之。</span></h1>
          <p className="hero-subtitle">AI Agent 工程师 / AI 创作者</p>
          <p className="hero-description">喜欢 Vibe Coding，也喜欢用 AI 把脑海里的奇思妙想做成真实、有趣的项目。这里记录我的探索，也希望能给你一点灵感。</p>
          <div className="hero-links">
            <a className="primary-link" href="#works">看看我的作品 <Arrow diagonal /></a>
            <a className="text-link" href="https://v.douyin.com/KMWLUsbhVDw/" target="_blank" rel="noreferrer">在抖音找我 <Arrow diagonal /></a>
          </div>
        </div>
        <div className="hero-foot"><span>VIBE CODING / AI AGENT / BIG DATA</span><a href="#about">向下探索 <Arrow /></a><span>01 — 03</span></div>
        <div className="interaction-hint" aria-hidden="true">移动鼠标，和我打个招呼 ↗</div>
      </section>

      <section className="about section-shell" id="about" aria-labelledby="about-title">
        <div className="section-intro"><p className="section-kicker">01 / ABOUT ME</p><h2 id="about-title">从好奇出发，<br /><em>一直在路上。</em></h2></div>
        <div className="about-grid">
          <p className="about-lead">我相信，最有意思的技术，是能让普通人也感受到创造的快乐。</p>
          <div className="about-copy"><p>我是乐之，来自湖南长沙。我的方向是大数据分析与 AI Agent，最近尤其着迷于 Vibe Coding：让 AI 帮忙写代码，把想法更快地变成作品。</p><p>工作之外，我爱旅行、游泳、骑行，也喜欢火锅和自己动手做美食。最近还在尝试健身，希望这次能坚持下去。</p></div>
        </div>
        <div className="timeline" aria-label="学习和创作经历">{biography.map((item, index) => <article className="timeline-item" key={item.title}>
          <span className="timeline-index">0{index + 1}</span>
          <div className="timeline-logo"><img src={asset(item.logo)} alt="" loading="lazy" /></div>
          <div><span className="timeline-period">{item.period}</span><h3>{item.title}</h3><p className="timeline-subtitle">{item.subtitle}</p><p className="timeline-body">{item.body}</p></div>
          <Arrow diagonal />
        </article>)}</div>
      </section>

      <section className="works section-shell" id="works" aria-labelledby="works-title">
        <div className="works-heading"><div><p className="section-kicker">02 / SELECTED WORKS</p><h2 id="works-title">边学边做，<br /><em>边做边分享。</em></h2></div><p>有教程、有作品，也有正在实现的想法。<br />欢迎一起探索 AI 能带来的新可能。</p></div>
        <div className="project-list">{projects.map((project, index) => <article className="project-card" key={project.id}>
          <div className="project-image"><img src={asset(project.cover)} alt={`${project.title}作品封面`} loading="lazy" /><span className="project-number">0{index + 1} / 03</span></div>
          <div className="project-info"><span className="section-kicker">{project.kicker}</span><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><ol>{project.items.map(item => <li key={item.title}><span>{item.title}</span><small>{item.meta}</small></li>)}</ol>{'link' in project && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <Arrow diagonal /></a>}</div>
        </article>)}</div>
      </section>

      <footer className="footer"><p>有趣的想法，值得被做出来。</p><div><span>© 2026 乐之</span><a href="https://github.com/caolezhi" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://v.douyin.com/KMWLUsbhVDw/" target="_blank" rel="noreferrer">抖音 ↗</a><a href="#home">回到顶部 ↑</a></div></footer>
    </main>
  </>
}
