// ============================================================
// 个人主页配置 — 修改这个文件即可更新整个网站
// 参考：devportfolio (config-driven), starfolio (typed data)
// ============================================================

export const SITE = {
  title: "晓黎 · xieea656",
  description: "高一学生 / 开发者 / 开源爱好者",
  url: "https://xieea.eu.cc",
  lang: "zh-CN",
  ogImage: "/og-image.png",
};

export const HERO = {
  greeting: "你好，我是",
  name: "晓黎",
  tagline: "高一纯理学生，喜欢写代码、折腾服务器、玩 AstrBot。",
  ctas: [
    { text: "看看项目", href: "#projects" },
    { text: "联系我", href: "#contact" },
  ] as const,
};

export const ABOUT = {
  title: "关于我",
  paragraphs: [
    "我是晓黎（xieea656），一名高一纯理学生。课余时间喜欢写代码、折腾 Linux 服务器、研究网络和自建服务。目前在维护自己的图床、博客、QQ Bot 等小项目。",
    "技术栈集中在 Web 前端（React/Astro/Tailwind）、后端（Node.js/Python）和运维（Docker/Nginx/Cloudflare）。喜欢用代码解决实际问题，也乐于分享和开源。",
  ],
  avatar: "", // 可选头像路径，留空则不显示
  skills: [
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Astro",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "Docker",
    "Linux",
    "Nginx",
    "Cloudflare",
  ],
};

export const PROJECTS = [
  {
    name: "图床 · img.xieea.eu.cc",
    description: "基于 Lsky Pro 的自建图床，Cloudflare CDN 全球加速，HTTPS 全链路。",
    techs: ["Lsky Pro", "PHP", "Nginx", "Cloudflare"],
    link: "https://img.xieea.eu.cc",
  },
  {
    name: "博客 · blog.xieea.eu.cc",
    description: "基于 Fuwari + Astro 的个人博客，部署在 Cloudflare Pages，Obsidian 写作流。",
    techs: ["Astro", "Fuwari", "MDX", "Cloudflare Pages"],
    link: "https://blog.xieea.eu.cc",
  },
  {
    name: "QQ Bot · AstrBot",
    description: "基于 AstrBot 框架的 QQ 机器人，支持 AI 对话、插件扩展、WebUI 管理。",
    techs: ["Python", "AstrBot", "AI", "WebSocket"],
    link: "https://github.com/xieea656",
  },
  {
    name: "HomeWeb · 个人主页",
    description: "你正在看的这个网站 — Astro + Tailwind CSS v4 构建，Lighthouse 满分，Cloudflare Pages 部署。",
    techs: ["Astro", "Tailwind CSS", "TypeScript", "Cloudflare"],
    link: "https://github.com/xieea656/homeweb",
  },
];

export const CONTACT = {
  title: "联系我",
  text: "对项目有兴趣？想交流技术？或者只是想打个招呼？欢迎随时联系我。",
  email: "xieea656@outlook.com",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/xieea656",
      icon: "github",
    },
    {
      name: "Bilibili",
      url: "https://space.bilibili.com/",
      icon: "bilibili",
    },
    {
      name: "Email",
      url: "mailto:xieea656@outlook.com",
      icon: "email",
    },
    {
      name: "Blog",
      url: "https://blog.xieea.eu.cc",
      icon: "blog",
    },
  ],
};

export const FOOTER = {
  text: "© 2026 晓黎 · Built with Astro · Deployed on Cloudflare Pages",
};
