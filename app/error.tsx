'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // 可以在这里添加错误日志上报
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-theme-text-primary">Something went wrong</h1>
                <p className="text-theme-text-secondary max-w-md mx-auto">
                    We apologize for the inconvenience. Please try again later or contact support if the problem persists.
                </p>
                <div className="flex gap-4 justify-center mt-8">
                    <Button
                        onClick={() => reset()}
                        className="bg-theme-accent hover:bg-theme-accent/90 text-white"
                    >
                        Try again
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => window.location.href = '/'}
                        className="border-theme-accent text-theme-accent hover:bg-theme-accent/10"
                    >
                        Go home
                    </Button>
                </div>
            </div>
        </div>
    )
} 