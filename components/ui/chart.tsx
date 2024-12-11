"use client"

import * as React from "react"
import { TooltipProps } from "recharts"

import { cn } from "@/lib/utils"

export interface ChartConfig {
  [key: string]: {
    label: string
    color: string
  }
}

export interface ChartContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig
}

export function ChartContainer({
  config,
  className,
  children,
  ...props
}: ChartContainerProps) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  )
}

export interface ChartTooltipContentProps extends Omit<TooltipProps<any, any>, 'children'> {
  indicator?: "line" | "dashed"
  nameKey?: string
  hideLabel?: boolean
}

export function ChartTooltipContent({
  active,
  payload,
  label,
  indicator = "line",
  nameKey = "name",
  hideLabel = false,
}: ChartTooltipContentProps) {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      {!hideLabel && (
        <div className="flex items-center justify-between gap-2">
          <div className="font-medium">{label}</div>
          {indicator === "line" && (
            <div className="h-px w-4 bg-muted-foreground" />
          )}
          {indicator === "dashed" && (
            <div className="h-px w-4 border-b border-dashed border-muted-foreground" />
          )}
        </div>
      )}
      <div className="flex flex-col gap-1">
        {payload.map((item: any, index: number) => (
          <div key={index} className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <div>{item[nameKey]}</div>
            </div>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// 由于 ChartContainer 和 ChartTooltipContent 已经通过 export function 导出
// 这里不需要重复导出
