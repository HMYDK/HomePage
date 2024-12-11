import Image from 'next/image'
import { Github, Linkedin, Mail, Terminal, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProjectsSection from '@/components/ProjectsSection'
import { userConfig } from '@/config/user'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 flex items-center mb-4 sm:mb-0">
            <Terminal className="inline-block mr-2" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              {userConfig.name}.dev
            </span>
          </h1>
          <div className="space-x-4">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
            <Image
              src={userConfig.avatar}
              alt={userConfig.name}
              width={200}
              height={200}
              className="rounded-full relative z-10 border-4 border-white shadow-lg"
              priority
            />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            {userConfig.name}
          </h2>
          <p className="text-lg sm:text-xl mb-6 text-gray-600">{userConfig.title}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild className="bg-white text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors">
              <a href={userConfig.social.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            {userConfig.social.linkedin && (
              <Button variant="outline" asChild className="bg-white text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors">
                <a href={userConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
            )}
            <Button variant="outline" asChild className="bg-white text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition-colors">
              <a href={`mailto:${userConfig.social.email}`}>
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
            </Button>
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

