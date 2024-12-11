import { getPluginInfoWithCache } from "./jetbrains";

export interface ProjectStats {
  stars?: number;
  downloads?: number;
  rating?: {
    score: number;
    count: number;
  };
}

/**
 * 从 GitHub URL 中提取用户名和仓库名
 * @param url GitHub 仓库 URL
 */
function extractGitHubInfo(
  url: string
): { owner: string; repo: string } | null {
  try {
    const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) return null;
    return {
      owner: match[1],
      repo: match[2].replace(".git", ""),
    };
  } catch {
    return null;
  }
}

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

/**
 * 获取 GitHub 仓库统计信息
 * @param url GitHub 仓库 URL
 */
async function fetchGitHubStats(
  url: string
): Promise<{ stars: number } | null> {
  const info = extractGitHubInfo(url);
  if (!info) return null;

  try {
    const headers = GITHUB_TOKEN
      ? {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        }
      : undefined;

    const response = await fetch(
      `https://api.github.com/repos/${info.owner}/${info.repo}`,
      { headers }
    );

    if (!response.ok) {
      console.error(`GitHub API error: ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    return {
      stars: data.stargazers_count,
    };
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return null;
  }
}

/**
 * 获取项目统计信息
 * @param config 项目配置
 */
export async function getProjectStats(config: {
  github?: string;
  jetbrains?: {
    pluginId: string;
  };
}): Promise<ProjectStats> {
  const stats: ProjectStats = {};

  // 并行获取所有数据
  const [githubStats, jetbrainsInfo] = await Promise.all([
    config.github ? fetchGitHubStats(config.github) : null,
    config.jetbrains ? getPluginInfoWithCache(config.jetbrains.pluginId) : null,
  ]);

  // 合并 GitHub 数据
  if (githubStats) {
    stats.stars = githubStats.stars;
  }

  // 合并 JetBrains 数据
  if (jetbrainsInfo) {
    stats.downloads = jetbrainsInfo.stats.downloads;
    if (jetbrainsInfo.stats.rating > 0) {
      stats.rating = {
        score: jetbrainsInfo.stats.rating,
        count: jetbrainsInfo.stats.ratingsCount,
      };
    }
  }

  return stats;
}
