import Image from 'next/image'
import { Github, Linkedin, Mail, Terminal, Twitter, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProjectsSection from '@/components/ProjectsSection'
import { userConfig } from '@/config/user'

// 动态纹理背景组件
const TextureBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-grain opacity-[0.15] mix-blend-overlay"></div>
    <div className="absolute inset-0 bg-noise opacity-[0.1] mix-blend-overlay"></div>
  </div>
)

export default function Home() {
  return (
    <div className="min-h-screen bg-theme-bg-light text-theme-text-primary relative">
      {/* 背景效果 */}
      <TextureBackground />

      {/* 装饰线条 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theme-accent/0 via-theme-accent to-theme-accent/0"></div>

      {/* 导航栏 */}
      <header className="container mx-auto px-4 py-8 relative">
        <nav className="flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center mb-4 sm:mb-0 relative group">
            <Terminal className="inline-block mr-2 text-theme-accent opacity-80" />
            <span className="text-theme-text-primary relative">
              {userConfig.name}
              <span className="text-theme-accent">.dev</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-theme-accent opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-500"></span>
            </span>
          </h1>
          <div className="space-x-10">
            {['About', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-theme-text-secondary hover:text-theme-accent transition-colors duration-300 relative group"
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
          <div className="relative inline-block group">
            <div className="relative">
              {/* 光晕效果 */}
              <div className="absolute -inset-4 bg-theme-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              {/* 头像框 */}
              <div className="relative rounded-full p-[2px] bg-gradient-to-r from-theme-accent/20 to-theme-gold/20">
                <div className="rounded-full p-[2px] bg-theme-bg-light">
                  <Image
                    src={userConfig.avatar}
                    alt={userConfig.name}
                    width={180}
                    height={180}
                    className="rounded-full relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 名字和标题 */}
          <div className="mt-12 relative animate-smooth-fade" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-6xl sm:text-7xl font-bold mb-6 relative inline-block">
              <span className="text-theme-text-primary relative">
                {userConfig.name}
                <span className="absolute -inset-2 bg-theme-accent/5 rounded-lg blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-theme-text-secondary relative inline-block group">
              <span className="relative z-10">
                {userConfig.title}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-theme-accent opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-500"></span>
            </p>
          </div>

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
                className="group flex items-center space-x-2 text-theme-text-secondary hover:text-theme-accent transition-colors duration-300"
              >
                <link.icon className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-theme-accent opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-500"></span>
                </span>
              </a>
            ))}
          </div>

          {/* 向下滚动指示器 */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-16">
            <ChevronDown className="w-6 h-6 text-theme-text-secondary/40 animate-subtle-float" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16">
          <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">About Me</h3>
          <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">{userConfig.about.title}</CardTitle>
              <CardDescription className="text-gray-600">{userConfig.about.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              {userConfig.about.description.map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-600">{paragraph}</p>
              ))}
              <div className="flex flex-wrap gap-2 mt-4">
                {userConfig.about.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <section id="contact" className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-6 text-gray-800">Get In Touch</h3>
          <p className="mb-6 text-xl text-gray-600">Looking forward to communicating with you!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              <a href={`mailto:${userConfig.social.email}`}>
                <Mail className="mr-2 h-5 w-5" /> Email
              </a>
            </Button>
            {userConfig.social.twitter && (
              <Button size="lg" asChild className="bg-[#0C7ABF] text-white hover:bg-[#0A6AA6] transition-all duration-300">
                <a href={userConfig.social.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter className="mr-2 h-5 w-5" /> Twitter
                </a>
              </Button>
            )}
            <Button size="lg" asChild className="bg-[#333] text-white hover:bg-[#24292e] transition-all duration-300">
              <a href={userConfig.social.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> GitHub
              </a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center border-t border-gray-200">
        <p className="mt-2 text-sm text-gray-500">Built with Next.js and Tailwind CSS</p>
      </footer>
    </div>
  )
}

