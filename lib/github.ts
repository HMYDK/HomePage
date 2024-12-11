import { userConfig } from "@/config/user";

interface GithubEvent {
  type: string;
  created_at: string;
  payload: {
    commits?: Array<any>;
  };
}

interface Contributions {
  [date: string]: number;
}

export async function fetchGithubContributions(): Promise<
  Array<{ date: string; contributions: number }>
> {
  const username = userConfig.social.github.split("/").pop();
  if (!username) return [];

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/events/public`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub data");
    }

    const events: GithubEvent[] = await response.json();

    // 按日期分组并计算贡献
    const contributions = events.reduce((acc: Contributions, event) => {
      const date = event.created_at.split("T")[0];
      if (!acc[date]) {
        acc[date] = 0;
      }

      // 计算不同类型事件的贡献值
      switch (event.type) {
        case "PushEvent":
          acc[date] += event.payload.commits?.length || 0;
          break;
        case "PullRequestEvent":
        case "IssuesEvent":
        case "IssueCommentEvent":
          acc[date] += 1;
          break;
        default:
          break;
      }

      return acc;
    }, {});

    // 转换为数组格式并排序
    return Object.entries(contributions)
      .map(([date, count]) => ({
        date,
        contributions: count,
      }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(-30); // 只显示最近30天的数据
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return [];
  }
}
