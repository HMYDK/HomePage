'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    children: React.ReactNode
    selector?: string
}

export function Portal({ children, selector = 'body' }: PortalProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    if (!mounted) {
        return null
    }

    const element = document.querySelector(selector)
    if (!element) {
        console.warn(`Portal: Element with selector "${selector}" not found`)
        return null
    }

    return createPortal(children, element)
} 