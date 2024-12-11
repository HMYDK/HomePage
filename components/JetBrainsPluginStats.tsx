'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Star, History, MessageSquare } from 'lucide-react'
import { getPluginInfoWithCache, fetchPluginReviews, fetchPluginVersionHistory, type PluginInfo, type PluginVersion, type PluginReview } from '@/lib/jetbrains'

interface PluginStatsProps {
    pluginId: string
}

export default function JetBrainsPluginStats({ pluginId }: PluginStatsProps) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [pluginInfo, setPluginInfo] = useState<PluginInfo | null>(null)
    const [reviews, setReviews] = useState<PluginReview[]>([])
    const [versions, setVersions] = useState<PluginVersion[]>([])
    const [totalReviews, setTotalReviews] = useState(0)

    useEffect(() => {
        async function loadPluginData() {
            try {
                setLoading(true)
                setError(null)

                const [info, reviewsData, versionHistory] = await Promise.all([
                    getPluginInfoWithCache(pluginId),
                    fetchPluginReviews(pluginId, 0, 3),
                    fetchPluginVersionHistory(pluginId)
                ]);

                if (info) {
                    setPluginInfo(info);
                    setReviews(reviewsData.reviews);
                    setTotalReviews(reviewsData.total);
                    setVersions(versionHistory);
                } else {
                    setError('Failed to load plugin information');
                }
            } catch (err) {
                setError('An error occurred while loading plugin data');
            } finally {
                setLoading(false);
            }
        }

        loadPluginData();
    }, [pluginId]);

    if (loading || !pluginInfo) {
        return (
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-center h-40">
                        <div className="animate-pulse text-gray-500">Loading plugin stats...</div>
                    </div>
                </CardContent>
            </Card>
        )
    }

    if (error) {
        return (
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-center h-40 text-red-500">
                        {error}
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card>
            <CardContent className="space-y-6">
                {/* 基本统计信息 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                        <Download className="w-6 h-6 text-blue-500 mb-2" />
                        <div className="text-2xl font-bold">{pluginInfo.stats.downloads.toLocaleString()}</div>
                        <div className="text-sm text-gray-500">Downloads</div>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                        <Star className="w-6 h-6 text-yellow-500 mb-2" />
                        <div className="text-2xl font-bold">{pluginInfo.stats.rating.toFixed(1)}/5</div>
                        <div className="text-sm text-gray-500">{pluginInfo.stats.ratingsCount} Ratings</div>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                        <History className="w-6 h-6 text-green-500 mb-2" />
                        <div className="text-2xl font-bold">{versions.length}</div>
                        <div className="text-sm text-gray-500">Versions</div>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                        <MessageSquare className="w-6 h-6 text-purple-500 mb-2" />
                        <div className="text-2xl font-bold">{totalReviews}</div>
                        <div className="text-sm text-gray-500">Total Reviews</div>
                    </div>
                </div>

                {/* 分类标签 */}
                <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Categories</h4>
                    <div className="flex flex-wrap gap-2">
                        {pluginInfo.categories.map((category: string) => (
                            <Badge key={category} variant="secondary">
                                {category}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* 最新版本 */}
                {versions.length > 0 && (
                    <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-2">Latest Version</h4>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-medium">{versions[0].version}</span>
                                <span className="text-sm text-gray-500">
                                    {new Date(versions[0].releaseDate).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="text-sm text-gray-600 whitespace-pre-wrap">
                                {versions[0].notes}
                            </div>
                        </div>
                    </div>
                )}

                {/* 最新评论 */}
                {reviews.length > 0 && (
                    <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-2">Recent Reviews ({totalReviews} Total)</h4>
                        <div className="space-y-4">
                            {reviews.slice(0, 3).map((review: PluginReview, index: number) => (
                                <div key={review.id} className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center gap-2">
                                            {review.user.avatar && (
                                                <img
                                                    src={review.user.avatar}
                                                    alt={review.user.name}
                                                    className="w-6 h-6 rounded-full"
                                                />
                                            )}
                                            <span className="font-medium">{review.user.name}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-500" />
                                            <span>{review.rating}/5</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600">{review.comment}</p>
                                    <div className="mt-2 text-xs text-gray-500">
                                        Version {review.version} • {new Date(review.date).toLocaleDateString()}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
} 