'use client'

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { subject: 'Frontend', A: 120, fullMark: 150 },
  { subject: 'Backend', A: 110, fullMark: 150 },
  { subject: 'DevOps', A: 90, fullMark: 150 },
  { subject: 'Databases', A: 100, fullMark: 150 },
  { subject: 'API Design', A: 115, fullMark: 150 },
  { subject: 'Testing', A: 95, fullMark: 150 },
];

export default function SkillChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-gray-800">Technical Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar name="Skills" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

