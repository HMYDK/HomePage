import Image from 'next/image'
import { Github, Linkedin, Mail, Terminal, Twitter, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProjectsSection from '@/components/ProjectsSection'
import { userConfig } from '@/config/user'
import { AnimatedTitle } from '@/components/AnimatedTitle'
import { DailyQuote } from '@/components/DailyQuote'
import { cn } from '@/lib/utils'

// 动态纹理背景组件
const TextureBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-grain opacity-[0.15] mix-blend-overlay"></div>
    <div className="absolute inset-0 bg-noise opacity-[0.1] mix-blend-overlay"></div>
  </div>
)

export default function Home() {
  return (
    <div className="min-h-screen bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-primary dark:text-white relative">
      {/* 背景效果 */}
      <TextureBackground />

      {/* 装饰线条 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theme-accent/0 via-theme-accent to-theme-accent/0"></div>

      {/* 导航栏 */}
      <header className="container mx-auto px-4 py-8 relative">
        <nav className="flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center mb-4 sm:mb-0 relative group">
            <Terminal className="inline-block mr-2 text-theme-accent opacity-80" />
            <span className="text-theme-text-primary dark:text-white relative">
              {userConfig.name}
              <span className="text-theme-accent">.dev</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-theme-accent opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-500"></span>
            </span>
          </h1>
          <div className="space-x-10">
            {['About', 'Projects'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-theme-text-secondary dark:text-gray-300 hover:text-theme-accent dark:hover:text-theme-accent transition-colors duration-300 relative group"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-theme-accent opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-500"></span>
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 relative">
        {/* Hero Section */}
        <section className="text-center mb-24 relative">
          {/* 头像容器 */}
          <div className="relative inline-block group perspective">
            <div className="relative transition-all duration-500 ease-out animate-levitate preserve-3d">
              {/* 主光晕效果 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-theme-accent/30 via-theme-gold/20 to-theme-accent/30 rounded-full blur-2xl opacity-60 animate-glow transition-all duration-700"></div>

              {/* 装饰环 */}
              <div className="absolute -inset-6 rounded-full border-2 border-theme-accent/20 animate-spin-slow"></div>
              <div className="absolute -inset-4 rounded-full border border-theme-gold/20 animate-spin-reverse"></div>

              {/* 头像框 */}
              <div className="relative rounded-full p-[2px] bg-gradient-to-r from-theme-accent/40 via-theme-gold/40 to-theme-accent/40 animate-morph">
                <div className="rounded-full p-[2px] bg-theme-bg-light dark:bg-theme-bg-dark relative z-10 overflow-hidden">
                  <Image
                    src={userConfig.avatar}
                    alt={userConfig.name}
                    width={180}
                    height={180}
                    className="rounded-full relative z-10 transition-all duration-500 scale-[1.02]"
                    priority
                  />
                  {/* 内部光效 */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-theme-accent/20 to-transparent opacity-60 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* 装饰光环 */}
              <div className="absolute -inset-8 rounded-full border border-theme-accent/20 transition-colors duration-500"></div>
              <div className="absolute -inset-10 rounded-full border border-theme-gold/20 transition-colors duration-500"></div>
            </div>
          </div>

          <AnimatedTitle
            text={userConfig.title}
            className="text-theme-text-secondary dark:text-gray-300"
          />

          {/* 社交链接 */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 animate-smooth-fade" style={{ animationDelay: '0.6s' }}>
            {[
              { href: userConfig.social.github, icon: Github, label: 'GitHub' },
              { href: userConfig.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
              { href: userConfig.social.twitter, icon: Twitter, label: 'Twitter' },
              { href: `mailto:${userConfig.social.email}`, icon: Mail, label: 'Email' }
            ].filter(link => link.href).map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={link.icon !== Mail ? "_blank" : undefined}
                rel={link.icon !== Mail ? "noopener noreferrer" : undefined}
                className="group flex items-center space-x-2 text-theme-text-secondary dark:text-gray-300 hover:text-theme-accent dark:hover:text-theme-accent transition-colors duration-300"
              >
                <link.icon className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-theme-accent opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-500"></span>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16">
          <h3 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">About Me</h3>
          <Card className="bg-white dark:bg-gray-800 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">{userConfig.about.title}</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">{userConfig.about.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              {userConfig.about.description.map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-600 dark:text-gray-300">{paragraph}</p>
              ))}
              <div className="flex flex-wrap gap-2 mt-4">
                {userConfig.about.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Daily Quote */}
        <section className="mb-16">
          <DailyQuote />
        </section>
      </main>
    </div>
  )
}

