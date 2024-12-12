'use client'

import { useState, useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface TypeWriterProps {
    text: string
    className?: string
    speed?: number
    delay?: number
    cursor?: boolean
    cursorStyle?: 'bar' | 'underscore' | 'block'
    cursorColor?: string
    deleteSpeed?: number
    eraseMode?: boolean
    loop?: boolean
    loopDelay?: number
    onComplete?: () => void
}

export function TypeWriter({
    text,
    className,
    speed = 100,
    delay = 0,
    cursor = true,
    cursorStyle = 'bar',
    cursorColor,
    deleteSpeed = 50,
    eraseMode = false,
    loop = false,
    loopDelay = 2000,
    onComplete,
}: TypeWriterProps) {
    const [displayText, setDisplayText] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [isErasing, setIsErasing] = useState(false)

    const typeText = useCallback(async () => {
        setIsTyping(true)
        setIsErasing(false)

        for (let i = 0; i < text.length; i++) {
            await new Promise(resolve => setTimeout(resolve, speed))
            setDisplayText(text.slice(0, i + 1))
        }

        setIsTyping(false)

        if (loop) {
            await new Promise(resolve => setTimeout(resolve, loopDelay))
            await eraseText()
            typeText()
        } else {
            onComplete?.()
        }
    }, [text, speed, loop, loopDelay, onComplete])

    const eraseText = useCallback(async () => {
        setIsTyping(false)
        setIsErasing(true)

        for (let i = text.length; i > 0; i--) {
            await new Promise(resolve => setTimeout(resolve, deleteSpeed))
            setDisplayText(text.slice(0, i - 1))
        }

        setIsErasing(false)
    }, [text, deleteSpeed])

    useEffect(() => {
        let timeout: NodeJS.Timeout

        const startTyping = async () => {
            setDisplayText('')
            if (eraseMode) {
                setDisplayText(text)
                await new Promise(resolve => setTimeout(resolve, delay))
                eraseText()
            } else {
                await new Promise(resolve => setTimeout(resolve, delay))
                typeText()
            }
        }

        timeout = setTimeout(startTyping, 0)

        return () => {
            clearTimeout(timeout)
        }
    }, [text, delay, eraseMode, typeText, eraseText])

    const cursorStyles = {
        bar: 'w-[2px] h-[1.2em] bg-current',
        underscore: 'w-[0.7em] h-[2px] bg-current',
        block: 'w-[0.6em] h-[1.2em] bg-current opacity-50',
    }

    return (
        <span className={cn('inline-block relative', className)}>
            {displayText}
            {cursor && (isTyping || isErasing) && (
                <span
                    className={cn(
                        'inline-block align-middle ml-[1px] -mb-[2px] animate-blink',
                        cursorStyles[cursorStyle]
                    )}
                    style={cursorColor ? { backgroundColor: cursorColor } : undefined}
                />
            )}
        </span>
    )
} 