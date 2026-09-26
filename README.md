# 乐之 · 互动 3D 简历

独立的个人展示网站，基于乐之在 Intro3D 创建的形象与公开资料制作。页面包含可跟随鼠标转头、视线移动和自然眨眼的 3D 人物，以及个人介绍、学习经历和作品。

## 本地运行

```bash
cd web
npm ci
npm run dev
```

构建：`npm run build`，产物位于 `web/dist/`。

## 修改内容

- 文字和项目：`web/src/content.ts`、`web/src/App.tsx`
- 3D 头部与眼睛互动：`web/src/Avatar.tsx`
- 页面样式：`web/src/styles.css`
- 3D 模型和图片：`web/public/models/`、`web/public/images/`

本网站独立于 [Intro3D 乐之页面](https://intro3d.com/u/lezhi)，不会修改或覆盖原页面。设计灵感来自 [sen-3d-resume](https://github.com/dayinji/sen-3d-resume)。3D 模型与个人作品素材保留原作者权利；网站代码以仓库内的 MIT License 发布。
