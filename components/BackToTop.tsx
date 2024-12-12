'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    if (!isVisible) {
        return null
    }

    return (
        <Button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-theme-accent/90 hover:bg-theme-accent text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
            size="icon"
            aria-label="Back to top"
        >
            <ChevronUp className="h-5 w-5" />
            <div className="absolute -inset-1 bg-white rounded-full opacity-20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
        </Button>
    )
} 