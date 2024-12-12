'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'

interface AnimatedElementProps {
    children: React.ReactNode
    animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom' | 'flip'
    duration?: number
    delay?: number
    className?: string
    threshold?: number
    once?: boolean
}

export function AnimatedElement({
    children,
    animation = 'fade-up',
    duration = 0.5,
    delay = 0,
    className,
    threshold = 0.1,
    once = true,
}: AnimatedElementProps) {
    const { ref, inView } = useInView({
        threshold,
        triggerOnce: once,
    })

    const [isVisible, setIsVisible] = useState(false)
    const hasAnimated = useRef(false)

    useEffect(() => {
        if (inView && !hasAnimated.current) {
            setIsVisible(true)
            hasAnimated.current = true
        }
    }, [inView])

    const baseStyles = 'transition-all transform'
    const animationStyles = {
        'fade-up': 'opacity-0 translate-y-8',
        'fade-down': 'opacity-0 -translate-y-8',
        'fade-left': 'opacity-0 translate-x-8',
        'fade-right': 'opacity-0 -translate-x-8',
        'zoom': 'opacity-0 scale-95',
        'flip': 'opacity-0 rotateX-90',
    }

    const visibleStyles = {
        'fade-up': 'opacity-100 translate-y-0',
        'fade-down': 'opacity-100 translate-y-0',
        'fade-left': 'opacity-100 translate-x-0',
        'fade-right': 'opacity-100 translate-x-0',
        'zoom': 'opacity-100 scale-100',
        'flip': 'opacity-100 rotateX-0',
    }

    return (
        <div
            ref={ref}
            className={cn(
                baseStyles,
                animationStyles[animation],
                isVisible && visibleStyles[animation],
                className
            )}
            style={{
                transitionDuration: `${duration}s`,
                transitionDelay: `${delay}s`,
            }}
        >
            {children}
        </div>
    )
} 