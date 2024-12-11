import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ReactNode } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  icon: ReactNode
}

export default function ProjectCard({ title, description, tags, icon }: ProjectCardProps) {
  return (
    <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <CardHeader>
        <div className="flex items-center space-x-2">
          {icon}
          <CardTitle className="text-xl text-blue-600 group-hover:text-purple-600 transition-colors duration-300">{title}</CardTitle>
        </div>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800 group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors duration-300">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

