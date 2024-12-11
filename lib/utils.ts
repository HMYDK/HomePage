import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 添加一个时间格式化工具函数
export function formatTimestamp(timestamp: string | number): string {
  const date = new Date(
    typeof timestamp === "string" ? parseInt(timestamp) : timestamp
  );
  return date.toISOString();
}
