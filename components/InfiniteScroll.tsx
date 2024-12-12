'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'

interface InfiniteScrollProps<T> {
    items: T[]
    renderItem: (item: T, index: number) => React.ReactNode
    loadMore: () => Promise<void>
    hasMore: boolean
    className?: string
    loadingIndicator?: React.ReactNode
    threshold?: number
    rootMargin?: string
}

export function InfiniteScroll<T>({
    items,
    renderItem,
    loadMore,
    hasMore,
    className,
    loadingIndicator = <div className="py-4 text-center">Loading more items...</div>,
    threshold = 0.5,
    rootMargin = '100px',
}: InfiniteScrollProps<T>) {
    const [isLoading, setIsLoading] = useState(false)
    const loadingRef = useRef(false)

    const { ref, inView } = useInView({
        threshold,
        rootMargin,
    })

    useEffect(() => {
        const loadMoreItems = async () => {
            if (!hasMore || isLoading || loadingRef.current) return

            try {
                loadingRef.current = true
                setIsLoading(true)
                await loadMore()
            } finally {
                setIsLoading(false)
                loadingRef.current = false
            }
        }

        if (inView) {
            loadMoreItems()
        }
    }, [inView, hasMore, isLoading, loadMore])

    return (
        <div className={cn('space-y-4', className)}>
            {items.map((item, index) => (
                <div key={index}>{renderItem(item, index)}</div>
            ))}
            {(hasMore || isLoading) && (
                <div ref={ref} className="w-full">
                    {loadingIndicator}
                </div>
            )}
        </div>
    )
} 