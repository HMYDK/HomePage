import Image from 'next/image'
import { Github, Linkedin, Mail, Terminal, Twitter, ChevronDown, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProjectsSection from '@/components/ProjectsSection'
import { userConfig } from '@/config/user'

const Meteors = ({ number }: { number: number }) => {
  const meteors = new Array(number).fill(null)
  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={idx}
          className={`absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]
            before:absolute before:h-[1px] before:w-[50px] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']`}
          style={{
            top: Math.floor(Math.random() * 100) + '%',
            left: Math.floor(Math.random() * 100) + '%',
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        />
      ))}
    </>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800 relative overflow-hidden">
      {/* 动态背景效果 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,rgba(120,119,198,0.3),transparent)]"></div>
        <Meteors number={20} />
        {/* 动态光点效果 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* 导航栏 */}
      <header className="container mx-auto px-4 py-6 relative">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <nav className="flex flex-col sm:flex-row justify-between items-center backdrop-blur-sm bg-white/30 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-2xl font-bold text-blue-600 flex items-center mb-4 sm:mb-0 relative group">
            <Terminal className="inline-block mr-2 group-hover:rotate-12 transition-transform duration-300" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 relative animate-text-gradient">
              {userConfig.name}.dev
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </span>
          </h1>
          <div className="space-x-6">
            {['About', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-blue-600 transition-colors relative group inline-block"
              >
                <span className="relative z-10 group-hover:animate-wave">{item}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 relative">
        {/* Hero Section */}
        <section className="text-center mb-16 relative">
          {/* Spotlight effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-spotlight"></div>

          {/* 头像容器 */}
          <div className="relative inline-block group perspective">
            {/* 3D 容器 */}
            <div className="relative transform-gpu transition-transform duration-500 group-hover:rotate-y-180 preserve-3d">
              {/* 头像正面 */}
              <div className="relative backface-hidden">
                {/* 光晕效果 */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                {/* 旋转边框 */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 p-1 animate-spin-slow"></div>
                {/* 头像 */}
                <div className="relative rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-500">
                  <div className="rounded-full p-1 bg-white overflow-hidden">
                    <Image
                      src={userConfig.avatar}
                      alt={userConfig.name}
                      width={180}
                      height={180}
                      className="rounded-full relative z-10 transform group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>
                </div>
              </div>
              {/* 头像背面 */}
              <div className="absolute inset-0 backface-hidden rotate-y-180">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-white animate-spin-slow" />
                </div>
              </div>
            </div>
          </div>

          {/* 名字和标题 */}
          <div className="mt-8 relative">
            <h2 className="text-5xl sm:text-6xl font-bold mb-4 relative inline-block">
              <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.blue.600),theme(colors.purple.600),theme(colors.blue.600))] animate-background-shine bg-[length:200%_auto] relative z-10">
                {userConfig.name}
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </h2>
            <p className="text-xl sm:text-2xl mb-8 text-gray-600 relative inline-block group">
              <span className="relative z-10 animate-text-gradient bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                {userConfig.title}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </p>
          </div>

          {/* 社交链接 */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { href: userConfig.social.github, icon: Github, label: 'GitHub' },
              { href: userConfig.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
              { href: userConfig.social.twitter, icon: Twitter, label: 'Twitter' },
              { href: `mailto:${userConfig.social.email}`, icon: Mail, label: 'Email' }
            ].filter(link => link.href).map((link, index) => (
              <Button
                key={link.label}
                variant="outline"
                size="lg"
                asChild
                className="bg-white/80 backdrop-blur-sm hover:bg-blue-50 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden group animate-tilt"
              >
                <a
                  href={link.href}
                  target={link.icon !== Mail ? "_blank" : undefined}
                  rel={link.icon !== Mail ? "noopener noreferrer" : undefined}
                  className="flex items-center relative z-10"
                >
                  <link.icon className="mr-2 h-5 w-5 group-hover:animate-wave" />
                  <span>{link.label}</span>
                  {/* 光效果 */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-background-shine"></div>
                  </div>
                </a>
              </Button>
            ))}
          </div>

          {/* 向下滚动指示器 */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-12">
            <ChevronDown className="w-6 h-6 text-gray-400 animate-float" />
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

