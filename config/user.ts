import { Code, Server, Database, Cloud } from "lucide-react";

export const userConfig = {
  // 基本信息
  name: "HMYDK",
  title: "Full Stack Developer | Open Source Enthusiast | Tech Blogger",
  avatar: "/placeholder.svg",

  // 社交链接
  social: {
    github: "https://github.com/HMYDK",
    // linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://x.com/lilijiexinku007",
    email: "paranoia_zk@yeah.net",
  },

  // 关于我
  about: {
    title: "Hello, World!",
    //英文：独立开发爱好者
    subtitle: "Independent Developer Enthusiast",
    //英文：独立开发爱好者，AI爱好者，多年开发经验
    description: [
      "- A passionate independent developer with years of experience in full-stack development.",
      "- AI technology enthusiast, exploring the intersection of AI and software development.",
      "- Dedicated to creating innovative solutions and contributing to open-source projects.",
    ],
    skills: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Docker",
    ],
  },

  // 项目
  projects: [
    {
      title: "AI Git Commit",
      description:
        "This plugin uses AI to automatically generate commit messages based on the changes in your code.",
      tags: ["jetbrains", "plugin", "AI", "git commit message"],
      icon: Code,
      iconColor: "text-blue-500",
    },
    {
      title: "Project Beta",
      description:
        "Scalable Node.js API for IoT device management, featuring real-time updates, device provisioning, and data aggregation.",
      tags: ["Node.js", "Express", "MongoDB", "MQTT", "Docker"],
      icon: Server,
      iconColor: "text-green-500",
    },
    {
      title: "Project Gamma",
      description:
        "AI-powered code review assistant that provides intelligent suggestions, detects potential bugs, and enforces coding standards.",
      tags: ["Python", "TensorFlow", "NLP", "GitHub API"],
      icon: Database,
      iconColor: "text-purple-500",
    },
    {
      title: "Project Delta",
      description:
        "Blockchain-based supply chain tracking system for enhancing transparency and traceability in complex supply networks.",
      tags: ["Solidity", "Ethereum", "Web3.js", "React"],
      icon: Cloud,
      iconColor: "text-indigo-500",
    },
  ],

  // GitHub 活动数据
  githubActivity: [
    { date: "2023-06-01", contributions: 5 },
    { date: "2023-06-08", contributions: 8 },
    { date: "2023-06-15", contributions: 12 },
    { date: "2023-06-22", contributions: 7 },
    { date: "2023-06-29", contributions: 15 },
    { date: "2023-07-06", contributions: 10 },
    { date: "2023-07-13", contributions: 18 },
  ],
};
