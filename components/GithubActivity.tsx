'use client'

import { useEffect, useState } from 'react'
import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { fetchGithubContributions } from '@/lib/github'

export default function GithubActivity() {
  const [data, setData] = useState<Array<{ date: string; contributions: number }>>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadGithubData() {
      try {
        const contributions = await fetchGithubContributions()
        setData(contributions)
      } catch (error) {
        console.error('Failed to load GitHub data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadGithubData()
  }, [])

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">GitHub Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center">
            <div className="animate-pulse text-gray-500">Loading activity data...</div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (data.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">GitHub Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center">
            <div className="text-gray-500">No activity data available</div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-gray-800">GitHub Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            contributions: {
              label: "Contributions",
              color: "hsl(215, 70%, 50%)",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <XAxis
                dataKey="date"
                stroke="#4B5563"
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              />
              <YAxis stroke="#4B5563" />
              <Tooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="contributions"
                stroke="hsl(215, 70%, 50%)"
                strokeWidth={2}
                dot={{ fill: 'hsl(215, 70%, 50%)', strokeWidth: 2 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

