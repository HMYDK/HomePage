import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="text-center space-y-4">
                <div className="text-9xl font-bold text-theme-accent/20">404</div>
                <h1 className="text-4xl font-bold text-theme-text-primary">Page Not Found</h1>
                <p className="text-theme-text-secondary max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Button
                    asChild
                    className="mt-8 bg-theme-accent hover:bg-theme-accent/90 text-white"
                >
                    <Link href="/">
                        Return Home
                    </Link>
                </Button>
            </div>
            {/* 装饰元素 */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-theme-accent/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-theme-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
        </div>
    )
} 