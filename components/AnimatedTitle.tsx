'use client'

import { useState } from 'react'
import { TypeWriterWithCallback } from './TypeWriterWithCallback'

interface AnimatedTitleProps {
    text: string
    className?: string
}

export function AnimatedTitle({ text, className }: AnimatedTitleProps) {
    const [isTypingComplete, setIsTypingComplete] = useState(false)

    return (
        <div className="mt-12 relative animate-smooth-fade" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl sm:text-2xl text-theme-text-secondary relative inline-block group">
                <span className="relative z-10">
                    <TypeWriterWithCallback
                        text={text}
                        speed={60}
                        delay={800}
                        cursor={true}
                        cursorStyle="bar"
                        cursorColor="currentColor"
                        className={className}
                        onComplete={() => {
                            setIsTypingComplete(true)
                            // 在这里可以添加其他完成后的效果
                        }}
                    />
                </span>
                <span
                    className={`absolute bottom-0 left-0 w-0 h-[2px] bg-theme-accent opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-500 ${isTypingComplete ? 'animate-smooth-fade' : ''
                        }`}
                />
            </p>
        </div>
    )
} 