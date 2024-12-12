type CacheItem<T> = {
  value: T;
  timestamp: number;
  expiry?: number;
};

class Cache {
  private cache: Map<string, CacheItem<any>>;
  private readonly defaultExpiry: number;

  constructor(defaultExpiry = 5 * 60 * 1000) {
    // 默认5分钟过期
    this.cache = new Map();
    this.defaultExpiry = defaultExpiry;
  }

  set<T>(key: string, value: T, expiry?: number): void {
    const timestamp = Date.now();
    this.cache.set(key, {
      value,
      timestamp,
      expiry: expiry ?? this.defaultExpiry,
    });

    // 同时存储到 localStorage
    try {
      localStorage.setItem(
        `cache_${key}`,
        JSON.stringify({
          value,
          timestamp,
          expiry: expiry ?? this.defaultExpiry,
        })
      );
    } catch (error) {
      console.warn("Failed to store in localStorage:", error);
    }
  }

  get<T>(key: string): T | null {
    // 先从内存缓存获取
    const item = this.cache.get(key);

    if (item) {
      if (this.isExpired(item)) {
        this.delete(key);
        return null;
      }
      return item.value as T;
    }

    // 如果内存中没有，尝试从 localStorage 获取
    try {
      const stored = localStorage.getItem(`cache_${key}`);
      if (stored) {
        const item = JSON.parse(stored) as CacheItem<T>;
        if (this.isExpired(item)) {
          this.delete(key);
          return null;
        }
        // 恢复到内存缓存
        this.cache.set(key, item);
        return item.value;
      }
    } catch (error) {
      console.warn("Failed to retrieve from localStorage:", error);
    }

    return null;
  }

  delete(key: string): void {
    this.cache.delete(key);
    try {
      localStorage.removeItem(`cache_${key}`);
    } catch (error) {
      console.warn("Failed to remove from localStorage:", error);
    }
  }

  clear(): void {
    this.cache.clear();
    try {
      Object.keys(localStorage)
        .filter((key) => key.startsWith("cache_"))
        .forEach((key) => localStorage.removeItem(key));
    } catch (error) {
      console.warn("Failed to clear localStorage:", error);
    }
  }

  private isExpired(item: CacheItem<any>): boolean {
    if (!item.expiry) return false;
    return Date.now() - item.timestamp > item.expiry;
  }
}

export const cache = new Cache();
