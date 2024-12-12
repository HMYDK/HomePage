export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="relative">
                {/* 主圆环 */}
                <div className="w-12 h-12 rounded-full border-2 border-theme-accent/20 border-t-theme-accent animate-spin"></div>
                {/* 内部装饰 */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full border border-theme-accent/40 animate-pulse"></div>
                </div>
                {/* 外部光晕 */}
                <div className="absolute -inset-4 bg-theme-accent/5 rounded-full blur-xl animate-pulse"></div>
            </div>
        </div>
    )
} 