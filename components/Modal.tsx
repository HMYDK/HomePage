'use client'

import { useEffect, useCallback } from 'react'
import { X } from 'lucide-react'
import { Portal } from './Portal'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    title?: string
    className?: string
    showCloseButton?: boolean
    closeOnOutsideClick?: boolean
    closeOnEsc?: boolean
}

export function Modal({
    isOpen,
    onClose,
    children,
    title,
    className,
    showCloseButton = true,
    closeOnOutsideClick = true,
    closeOnEsc = true,
}: ModalProps) {
    const handleEscapeKey = useCallback(
        (event: KeyboardEvent) => {
            if (closeOnEsc && event.key === 'Escape') {
                onClose()
            }
        },
        [closeOnEsc, onClose]
    )

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleEscapeKey)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, handleEscapeKey])

    if (!isOpen) return null

    return (
        <Portal>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={closeOnOutsideClick ? onClose : undefined}
                />

                {/* Modal Content */}
                <div
                    className={cn(
                        "relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg mx-4 animate-in fade-in-0 zoom-in-95",
                        className
                    )}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    {(title || showCloseButton) && (
                        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                            {title && (
                                <h2 className="text-lg font-semibold text-theme-text-primary">
                                    {title}
                                </h2>
                            )}
                            {showCloseButton && (
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={onClose}
                                    className="text-theme-text-secondary hover:text-theme-text-primary"
                                    aria-label="Close modal"
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                            )}
                        </div>
                    )}

                    {/* Body */}
                    <div className="p-4">{children}</div>
                </div>
            </div>
        </Portal>
    )
} 