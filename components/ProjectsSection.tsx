'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ProjectCard from "./ProjectCard"
import { userConfig } from "@/config/user"

// 获取所有唯一的标签
const allTags = Array.from(
    new Set(userConfig.projects.flatMap(project => project.tags))
).sort()

export default function ProjectsSection() {
    const [selectedTag, setSelectedTag] = useState<string | null>(null)

    // 根据选中的标签筛选项目
    const filteredProjects = selectedTag
        ? userConfig.projects.filter(project => project.tags.includes(selectedTag))
        : userConfig.projects

    return (
        <section id="projects" className="mb-16">
            <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">Featured Projects</h3>

            {/* 标签筛选器 */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                <Button
                    variant={selectedTag === null ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(null)}
                    className="transition-colors"
                >
                    All
                </Button>
                {allTags.map(tag => (
                    <Button
                        key={tag}
                        variant={selectedTag === tag ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTag(tag)}
                        className="transition-colors"
                    >
                        {tag}
                    </Button>
                ))}
            </div>

            {/* 项目网格 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        longDescription={project.longDescription}
                        status={project.status}
                        tags={project.tags}
                        icon={project.icon}
                        iconColor={project.iconColor}
                        links={project.links}
                        highlights={project.highlights}
                    />
                ))}
            </div>

            {/* 无结果提示 */}
            {filteredProjects.length === 0 && (
                <div className="text-center text-gray-500 mt-8">
                    No projects found for the selected filter.
                </div>
            )}
        </section>
    )
} 