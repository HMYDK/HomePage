import { formatTimestamp } from "./utils";

export interface PluginStats {
  downloads: number;
  rating: number;
}

export interface PluginInfo {
  id: string;
  name: string;
  description: string;
  stats: PluginStats;
  categories: string[];
  vendor: {
    name: string;
    url: string;
  };
}

export interface PluginVersion {
  version: string;
  releaseDate: string;
  notes: string;
  downloads: number;
  since?: string;
  until?: string;
}

export interface PluginReview {
  id: number;
  rating: number;
  comment: string;
  date: string;
  version?: string;
  repliesCount: number;
  user: {
    name: string;
    avatar: string;
  };
}

// 缓存接口
interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

// 缓存配置
const CACHE_CONFIG = {
  DEFAULT_TIME: 1000 * 60 * 60, // 1小时
  MAX_ENTRIES: 100, // 最大缓存条目数
} as const;

// 缓存实例
const pluginCache = new Map<string, CacheEntry<PluginInfo>>();

/**
 * 从 JetBrains Plugin Repository 获取插件信息
 * @param pluginId 插件ID
 * @returns 插件信息
 */
export async function fetchJetBrainsPluginInfo(
  pluginId: string
): Promise<PluginInfo | null> {
  try {
    // 并行请求插件信息和评分
    const [infoResponse, ratingResponse] = await Promise.all([
      fetch(`/api/jetbrains?pluginId=${pluginId}`),
      fetch(`/api/jetbrains?pluginId=${pluginId}&endpoint=rating`),
    ]);

    if (!infoResponse.ok || !ratingResponse.ok) {
      throw new Error(`Failed to fetch plugin info or rating`);
    }

    const [data, ratingData] = await Promise.all([
      infoResponse.json(),
      ratingResponse.json(),
    ]);

    const pluginInfo = {
      id: pluginId,
      name: data.name,
      description: data.description,
      stats: {
        downloads: data.downloads || 0,
        rating: ratingData.meanRating || 0,
      },
      categories: data.tags?.map((tag: any) => tag.name) || [],
      vendor: {
        name: data.vendor?.name || "Unknown",
        url: data.vendor?.url || "",
      },
    };

    return pluginInfo;
  } catch (error) {
    console.error("Error fetching JetBrains plugin info:", error);
    return null;
  }
}

/**
 * 获取插件的版本历史
 * @param pluginId 插件ID
 * @returns 版本历史列表
 */
export async function fetchPluginVersionHistory(
  pluginId: string
): Promise<PluginVersion[]> {
  try {
    const response = await fetch(
      `/api/jetbrains?pluginId=${pluginId}&endpoint=updates`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch version history: ${response.statusText}`
      );
    }

    const data = await response.json();

    const versions = data.map((version: any) => ({
      version: version.version || "Unknown",
      releaseDate: version.cdate
        ? formatTimestamp(version.cdate)
        : new Date().toISOString(),
      notes: version.notes || "",
      downloads: version.downloads || 0,
      since: version.since,
      until: version.until,
    }));

    return versions;
  } catch (error) {
    return [];
  }
}

/**
 * 获取插件的评论
 * @param pluginId 插件ID
 * @param offset 开始位置
 * @param limit 每页数量
 * @returns 评论列表和总数
 */
export async function fetchPluginReviews(
  pluginId: string,
  offset: number = 0,
  limit: number = 10
): Promise<{ reviews: PluginReview[]; total: number }> {
  try {
    const response = await fetch(
      `/api/jetbrains?pluginId=${pluginId}&endpoint=comments&offset=${offset}&limit=${limit}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch reviews: ${response.statusText}`);
    }

    const data = await response.json();

    const reviews = data.map((review: any) => ({
      id: review.id,
      rating: review.rating,
      comment: review.comment.replace(/<\/?p>/g, "").trim(), // 移除 HTML 标签
      date: new Date(parseInt(review.cdate)).toISOString(),
      version: review.updateVersion,
      repliesCount: review.repliesCount,
      user: {
        name: review.author.name,
        avatar: review.author.icon,
      },
    }));

    return {
      reviews,
      total: data.length || 0,
    };
  } catch (error) {
    console.error("Error fetching plugin reviews:", error);
    return { reviews: [], total: 0 };
  }
}

/**
 * 清理过期缓存
 */
function cleanupCache(): void {
  const now = Date.now();
  Array.from(pluginCache.entries()).forEach(([key, value]) => {
    if (now - value.timestamp > CACHE_CONFIG.DEFAULT_TIME) {
      pluginCache.delete(key);
    }
  });
}

/**
 * 获取带缓存的插件信息
 * @param pluginId 插件ID
 * @param cacheTime 缓存时间（毫秒）
 */
export async function getPluginInfoWithCache(
  pluginId: string,
  cacheTime: number = CACHE_CONFIG.DEFAULT_TIME
): Promise<PluginInfo | null> {
  const now = Date.now();
  const cached = pluginCache.get(pluginId);

  // 如果缓存存在且未过期
  if (cached && now - cached.timestamp < cacheTime) {
    return cached.data;
  }

  // 清理过期缓存
  if (pluginCache.size >= CACHE_CONFIG.MAX_ENTRIES) {
    cleanupCache();
  }

  // 获取新数据
  const data = await fetchJetBrainsPluginInfo(pluginId);
  if (data) {
    pluginCache.set(pluginId, { data, timestamp: now });
  }

  return data;
}
