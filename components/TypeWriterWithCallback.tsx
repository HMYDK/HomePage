'use client'

import { TypeWriter } from './TypeWriter'

interface TypeWriterWithCallbackProps {
    text: string
    className?: string
    speed?: number
    delay?: number
    cursor?: boolean
    cursorStyle?: 'bar' | 'underscore' | 'block'
    cursorColor?: string
    onComplete?: () => void
}

export function TypeWriterWithCallback({
    text,
    className,
    speed = 60,
    delay = 800,
    cursor = true,
    cursorStyle = 'bar',
    cursorColor = 'currentColor',
    onComplete,
}: TypeWriterWithCallbackProps) {
    return (
        <TypeWriter
            text={text}
            speed={speed}
            delay={delay}
            cursor={cursor}
            cursorStyle={cursorStyle}
            cursorColor={cursorColor}
            className={className}
            onComplete={onComplete}
        />
    )
} 