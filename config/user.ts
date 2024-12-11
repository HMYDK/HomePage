import {
  Code,
  Server,
  Database,
  Cloud,
  Chrome,
  GitCommit,
  GithubIcon,
} from "lucide-react";

interface SocialLinks {
  github: string;
  linkedin?: string;
  twitter?: string;
  email: string;
}

interface ProjectLinks {
  github?: string;
  demo?: string;
  docs?: string;
  jetbrains?: {
    pluginId: string;
  };
}

export interface Project {
  title: string;
  description: string;
  longDescription?: string[];
  status?: string;
  tags: string[];
  icon:
    | typeof Code
    | typeof Server
    | typeof Database
    | typeof Cloud
    | typeof GithubIcon
    | typeof GitCommit
    | typeof Chrome;
  iconColor: string;
  image?: string;
  links: ProjectLinks;
  highlights?: string[];
}

interface UserConfig {
  name: string;
  title: string;
  avatar: string;
  social: SocialLinks;
  about: {
    title: string;
    subtitle: string;
    description: string[];
    skills: string[];
  };
  projects: Project[];
}

export const userConfig: UserConfig = {
  // 基本信息
  name: "HMYDK",
  title: "Full Stack Developer | Open Source Enthusiast | Tech Blogger",
  avatar: "/placeholder.svg",

  // 社交链接
  social: {
    github: "https://github.com/HMYDK",
    twitter: "https://x.com/lilijiexinku007",
    email: "paranoia_zk@yeah.net",
  },

  // 关于我
  about: {
    title: "Hello, World!",
    subtitle: "Passionate about crafting elegant solutions to complex problems",
    description: [
      "I'm a full stack developer with 5+ years of experience in building scalable web applications. My journey in tech has been driven by curiosity and a love for learning. I thrive in collaborative environments and enjoy tackling challenging projects that push the boundaries of what's possible.",
      "When I'm not coding, you can find me contributing to open source projects, writing technical blogs, or exploring the latest developments in AI and machine learning.",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Python",
      "Docker",
      "AWS",
    ],
  },

  // 项目
  projects: [
    {
      title: "AI Git Commit",
      description:
        "JetBrains IDE plugin that uses AI to automatically generate meaningful commit messages by analyzing your code changes.",
      longDescription: [
        "Developed a JetBrains plugin that integrates with OpenAI's GPT to analyze code changes and generate descriptive commit messages.",
        "Implemented intelligent diff analysis to provide context-aware commit suggestions.",
        "Built with a focus on developer experience and productivity enhancement.",
      ],
      status: "Active",
      tags: ["JetBrains Plugin", "AI", "Git", "Java", "Open Source"],
      icon: GitCommit,
      iconColor: "text-blue-500",
      image: "/projects/ai-git-commit.png",
      links: {
        github: "https://github.com/HMYDK/AIGitCommit",
        demo: "https://plugins.jetbrains.com/plugin/24851-ai-git-commit",
        jetbrains: {
          pluginId: "24851",
        },
      },
      highlights: ["Support multiple models"],
    },
    {
      title: "WebHighlighter",
      description: "A tool that can highlight the text in the web page.",
      longDescription: ["A tool that can highlight the text in the web page."],
      status: "Development",
      tags: ["Chrome Extension", "JavaScript", "Browser Extension"],
      icon: Chrome,
      iconColor: "text-blue-500",
      image: "/projects/web-highlighter.png",
      links: {
        github: "https://github.com/HMYDK/code-review-gpt",
        demo: "https://plugins.jetbrains.com/plugin/24851-ai-git-commit",
      },
    },
    {
      title: "CoderHomePage",
      description: "A personal homepage for developers",
      longDescription: [
        "Support counting GitHub stars.",
        "Support collecting JetBrains plugin information.",
      ],
      status: "Beta",
      tags: ["Open Source", "React", "Next.js", "TailwindCSS"],
      icon: GithubIcon,
      iconColor: "text-blue-500",
      image: "/projects/ai-git-commit.png",
      links: {
        github: "https://github.com/HMYDK/HomePage",
      },
      highlights: ["Easy to use"],
    },
  ],
};

// 导出项目列表供其他组件使用
export const projects = userConfig.projects;
