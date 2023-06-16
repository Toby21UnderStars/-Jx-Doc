# Jx Doc

通常使用 [Docusaurus 2](https://docusaurus.io/) 来构建文档需要对其做出一些 preset 和主题设置。Jx Doc 就是套简单的预设模板，已经是一套完整的文档配置。跟 Docusaurus 基础不同的一点就是不需要配置 Navbar 和 Sidebar，完全由目录来驱动生成。

直接在 `docs/` 下开始写文档吧。

## Feature

- [] Preset
- [] Github Pages Deploy
- [] Template Branch
- [] CLI

## Without Config

通常写 Docusaurus 除了 preset 以外，还要不断补充 Navbar 和 Sidebars，我觉得这个过程很繁琐，毕竟大部分时候 Navbar、Sidebars 和文件路由是一一对应的。

所以为什么不直接忽略这个 Navbar、Sidebars 的配置功能，完全由文件路由来驱动视图生成呢？Jx Doc 正是这样一个文档工具

> 底层还是 Docusaurus。你仍然可以进行相关的配置。

### Exmaple

在 `Docusaurus` 最初的例子中，文件路由是这么展示的：

```bash
.
├── tutorial-basics
│   ├── _category_.json
│   ├── congratulations.md
│   ├── create-a-blog-post.md
│   ├── create-a-document.md
│   ├── create-a-page.md
│   ├── deploy-your-site.md
│   └── markdown-features.mdx
└── tutorial-extras
    ├── _category_.json
    ├── manage-docs-versions.md
    └── translate-your-site.md
```

那么完全可以视为 `tutorial-basics` 和 `tutorial-extras` 是 `Navbar`，而其子目录是 `Sidebar`。

## Deploy on Github Pages

## CLI jx-doc

```bash
jx-doc create doc
jx-doc create wiki

jx-doc start

jx-doc build
```
