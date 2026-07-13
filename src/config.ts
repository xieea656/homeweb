// ============================================================
// 个人主页配置
// 设计参考：guizang-ppt（杂志排版·电子墨水·衬线美学）
// ============================================================

export const SITE = {
  title: "晓黎 · xieea656",
  description: "高一学生 / 开发者 / AI 爱好者",
  url: "https://xieea.eu.cc",
  lang: "zh-CN",
};

export const HERO = {
  greeting: "Xiao Li",
  name: "晓黎",
  tagline: "高一纯理学生。写代码，玩 AI，折腾 Linux。",
  ctas: [
    { text: "项目", href: "#projects" },
    { text: "联系", href: "#contact" },
  ] as const,
};

export const ABOUT = {
  title: "关于",
  paragraphs: [
    "我是晓黎（xieea656），高一纯理学生。课余写代码、玩 AI（Claude、Code）、折腾 Linux 服务器。自建过图床、博客、QQ Bot 等服务，目前在用七牛云做对象存储。",
    "技术栈偏 Web 全栈 + 运维：前端用 React/Astro/Tailwind，后端 Node.js/Python，部署靠 Docker/Nginx/Cloudflare。喜欢用代码解决实际问题。",
  ],
  skills: [
    "TypeScript", "React", "Astro", "Tailwind CSS",
    "Node.js", "Python", "Docker", "Linux",
    "Nginx", "Cloudflare", "AI/LLM", "Git",
  ],
};

export const PROJECTS = [
  {
    name: "博客",
    description: "基于 Fuwari + Astro 的个人博客，Cloudflare Pages 部署，Obsidian 写作流。",
    techs: ["Astro", "Fuwari", "MDX", "Cloudflare"],
    link: "https://blog.xieea.eu.cc",
  },
  {
    name: "QQ Bot",
    description: "基于 AstrBot 的 QQ 机器人，接入 AI 大模型对话，WebUI 管理，插件扩展。",
    techs: ["Python", "AstrBot", "LLM", "WebSocket"],
    link: "https://github.com/xieea656",
  },
  {
    name: "对象存储",
    description: "七牛云对象存储 + CDN，替代自建图床，更稳定省心。",
    techs: ["Kodo", "CDN", "HTTPS"],
    link: "",
  },
  {
    name: "HomeWeb",
    description: "你正在看的本站——Astro + 杂志排版美学，Cloudflare Pages 部署。",
    techs: ["Astro", "WebGL", "Motion", "Cloudflare"],
    link: "https://github.com/xieea656/homeweb",
  },
];

export const CONTACT = {
  title: "联系",
  text: "对项目有兴趣？想交流技术？或者只是打个招呼？",
  email: "xieea656@outlook.com",
  socials: [
    { name: "GitHub", url: "https://github.com/xieea656", icon: "github" },
    { name: "Email", url: "mailto:xieea656@outlook.com", icon: "mail" },
    { name: "Blog", url: "https://blog.xieea.eu.cc", icon: "rss" },
  ],
};

export const FOOTER = {
  text: "© 2026 Xiao Li · 杂志排版 · Cloudflare Pages",
};
