'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Download, Activity, Github, ExternalLink, FileText } from 'lucide-react'
import { cn } from "@/lib/utils"
import { type ProjectStats, getProjectStats } from '@/lib/stats'
import JetBrainsPluginStats from './JetBrainsPluginStats'

interface ProjectCardProps {
  title: string
  description: string
  longDescription?: string[]
  status?: string
  tags: string[]
  icon: any
  iconColor: string
  links: {
    github?: string
    demo?: string
    docs?: string
    jetbrains?: {
      pluginId: string
    }
  }
  highlights?: string[]
}

export default function ProjectCard({
  title,
  description,
  longDescription,
  status,
  tags,
  icon: Icon,
  iconColor,
  links,
  highlights,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [stats, setStats] = useState<ProjectStats | null>(null)

  useEffect(() => {
    async function loadStats() {
      const data = await getProjectStats({
        github: links.github,
        jetbrains: links.jetbrains,
      })
      setStats(data)
    }

    loadStats()
  }, [links.github, links.jetbrains])

  return (
    <Card className={cn(
      "group bg-white border-none shadow-lg transition-all duration-300",
      isExpanded ? "shadow-xl" : "hover:shadow-xl"
    )}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon className={cn("w-6 h-6", iconColor)} />
            <h3 className="text-xl font-semibold text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-4">
            {/* 统计信息 */}
            {stats && (
              <div className="flex items-center gap-4 text-sm">
                {stats.stars !== undefined && (
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-600">{stats.stars.toLocaleString()}</span>
                  </div>
                )}
                {stats.downloads !== undefined && (
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-600">{stats.downloads.toLocaleString()}</span>
                  </div>
                )}
                {stats.rating && (
                  <div className="flex items-center gap-1">
                    <Activity className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">{stats.rating.score.toFixed(1)}/5</span>
                  </div>
                )}
              </div>
            )}
            {status && (
              <Badge
                variant="secondary"
                className={cn(
                  "bg-white/90",
                  status === "Active" && "text-green-600",
                  status === "Beta" && "text-blue-600",
                  status === "Development" && "text-orange-600"
                )}
              >
                {status}
              </Badge>
            )}
          </div>
        </div>
        <p className="text-gray-600">{description}</p>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {/* 标签 */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-gray-100 text-gray-800 group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors duration-300"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* JetBrains Plugin Stats */}
          {links.jetbrains && isExpanded && (
            <div className="mt-6">
              <JetBrainsPluginStats pluginId={links.jetbrains.pluginId} />
            </div>
          )}

          {/* 展开的内容 */}
          {isExpanded && longDescription && (
            <div className="mt-4 space-y-2">
              {longDescription.map((paragraph, index) => (
                <p key={index} className="text-gray-600 text-sm">
                  {paragraph}
                </p>
              ))}
              {highlights && (
                <div className="mt-4">
                  <h4 className="font-medium text-gray-800 mb-2">Highlights</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* 操作按钮 */}
          <div className="flex flex-wrap gap-2 mt-4">
            {links.github && (
              <Button size="sm" variant="outline" asChild>
                <a href={links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
            {links.demo && (
              <Button size="sm" variant="outline" asChild>
                <a href={links.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {links.jetbrains ? 'Plugin Page' : 'Demo'}
                </a>
              </Button>
            )}
            {links.docs && (
              <Button size="sm" variant="outline" asChild>
                <a href={links.docs} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Docs
                </a>
              </Button>
            )}
            {(longDescription || links.jetbrains) && (
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsExpanded(!isExpanded)}
                className="ml-auto"
              >
                {isExpanded ? 'Show Less' : 'Learn More'}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

