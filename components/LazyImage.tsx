'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LazyImageProps {
    src: string
    alt: string
    width: number
    height: number
    className?: string
    priority?: boolean
    quality?: number
    placeholder?: 'blur' | 'empty'
    blurDataURL?: string
    onLoad?: () => void
}

export function LazyImage({
    src,
    alt,
    width,
    height,
    className,
    priority = false,
    quality = 75,
    placeholder = 'empty',
    blurDataURL,
    onLoad,
}: LazyImageProps) {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        setIsLoading(true)
        setError(null)
    }, [src])

    const handleLoad = () => {
        setIsLoading(false)
        onLoad?.()
    }

    const handleError = (error: Error) => {
        setIsLoading(false)
        setError(error)
    }

    if (error) {
        return (
            <div
                className={cn(
                    'flex items-center justify-center bg-gray-100 dark:bg-gray-800',
                    className
                )}
                style={{ width, height }}
            >
                <span className="text-sm text-gray-500">Failed to load image</span>
            </div>
        )
    }

    return (
        <div className={cn('relative overflow-hidden', className)}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                quality={quality}
                priority={priority}
                placeholder={placeholder}
                blurDataURL={blurDataURL}
                className={cn(
                    'transition-opacity duration-300',
                    isLoading ? 'opacity-0' : 'opacity-100'
                )}
                onLoad={handleLoad}
                onError={() => handleError(new Error('Failed to load image'))}
            />
            {isLoading && (
                <div
                    className="absolute inset-0 bg-gray-100 dark:bg-gray-800 animate-pulse"
                    style={{ width, height }}
                />
            )}
        </div>
    )
} 