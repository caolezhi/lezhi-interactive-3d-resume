export const biography = [
  {
    period: '2014—2018',
    title: '西南交通大学',
    subtitle: '电子信息工程 · 本科',
    body: '专业课程：电路分析、数字电子技术、信号与系统等。',
    logo: 'images/logo-swjt.webp',
  },
  {
    period: '2018—2021',
    title: '国防科技大学',
    subtitle: '管理科学与工程 · 研究生',
    body: '主修课程：数据挖掘、人工智能等。',
    logo: 'images/logo-nudt.webp',
  },
  {
    period: '2026—至今',
    title: 'AI 自媒体博主',
    subtitle: '探索 Vibe Coding',
    body: '记录自己学习 AI 的过程，分享有趣、实用的项目。',
    logo: 'images/icon-douyin.webp',
  },
] as const

export const projects = [
  {
    id: 'douyin',
    title: '抖音',
    kicker: '01 / CONTENT',
    subtitle: '乐之 · AI 项目分享',
    cover: 'images/cover-douyin.webp',
    items: [
      { title: '豆包 AI 工作模式教程', meta: '播放量 748' },
      { title: '豆包生成桌宠', meta: '播放量 72' },
      { title: 'AI 工具生成桌宠', meta: '播放量 4' },
      { title: '画图 Skill 项目分享', meta: '播放量 8425' },
      { title: 'AI 小白入门网站', meta: '播放量 528' },
    ],
    link: 'https://v.douyin.com/KMWLUsbhVDw/',
    linkLabel: '去抖音看看',
  },
  {
    id: 'agent',
    title: '项目',
    kicker: '02 / BUILD',
    subtitle: '从 0 到 1 手写一个 Mini AI Agent',
    cover: 'images/cover-agent.webp',
    items: [
      { title: '先给电脑搭个工作台', meta: '01' },
      { title: '让网页和程序聊起来', meta: '02' },
      { title: '给 AI 装上记忆', meta: '03' },
      { title: '让 AI 长出手脚', meta: '04' },
    ],
  },
  {
    id: 'book',
    title: '《大数据平台架构》',
    kicker: '03 / BOOK',
    subtitle: '大数据教材 · 副主编',
    cover: 'images/cover-book.webp',
    items: [
      { title: '谁适合读，怎么开始读', meta: '01' },
      { title: '我与这本书的故事', meta: '02' },
      { title: '从哪里开始认识大数据', meta: '03' },
      { title: '把书里的知识用起来', meta: '04' },
    ],
  },
] as const
