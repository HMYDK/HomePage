'use client'

import React from 'react'
import { Button } from "@/components/ui/button"

interface Props {
    children: React.ReactNode
}

interface State {
    hasError: boolean
    error?: Error
}

export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // 可以在这里添加错误日志上报
        console.error('Error caught by boundary:', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-[400px] flex flex-col items-center justify-center p-4">
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl font-bold text-theme-text-primary">Something went wrong</h2>
                        <p className="text-theme-text-secondary max-w-md mx-auto">
                            {this.state.error?.message || 'An unexpected error occurred'}
                        </p>
                        <Button
                            onClick={() => this.setState({ hasError: false })}
                            className="bg-theme-accent hover:bg-theme-accent/90 text-white mt-4"
                        >
                            Try again
                        </Button>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
} 