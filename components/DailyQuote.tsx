'use client'

import { useEffect, useState } from 'react'
import { quotes, type Quote } from '@/config/quotes'
import { cn } from '@/lib/utils'

function getRandomQuote(): Quote {
    const today = new Date()
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()
    const index = seed % quotes.length
    return quotes[index]
}

export function DailyQuote() {
    const [quote, setQuote] = useState<Quote | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setQuote(getRandomQuote())
            setIsLoading(false)
        }, 800)

        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return (
            <div className="w-full max-w-3xl mx-auto py-12">
                <div className="animate-pulse space-y-4">
                    <div className="h-5 bg-primary/10 rounded w-3/4 mx-auto"></div>
                    <div className="h-4 bg-primary/10 rounded w-1/4 mx-auto"></div>
                </div>
            </div>
        )
    }

    if (!quote) return null

    return (
        <div className="w-full max-w-3xl mx-auto py-12 group">
            <div className="text-center space-y-6">
                <p className={cn(
                    "text-2xl font-light tracking-wide leading-relaxed",
                    "text-foreground/70 transition-colors duration-500",
                    "group-hover:text-foreground"
                )}>
                    {quote.content}
                </p>
                <div className="inline-flex items-center gap-4 text-base text-muted-foreground/60 group-hover:text-muted-foreground transition-colors duration-500">
                    <span className="w-12 h-px bg-border/40 group-hover:bg-border/60 transition-colors duration-500"></span>
                    <span className="font-light tracking-wider">{quote.author}</span>
                    <span className="w-12 h-px bg-border/40 group-hover:bg-border/60 transition-colors duration-500"></span>
                </div>
            </div>
        </div>
    )
} 