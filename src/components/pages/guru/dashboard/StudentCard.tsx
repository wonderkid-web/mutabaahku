"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { BookOpen, RotateCcw, Calendar } from "lucide-react"

interface Student {
  id: number
  name: string
  totalAyatHafalan: number
  totalAyatMurojah: number
  totalJuz: number
  status: number
  lastHafalanDate: string
}

interface StudentCardProps {
  student: Student
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

function getStatusBadge(status: number) {
  switch (status) {
    case 0:
      return <Badge variant="secondary">Tidak Aktif</Badge>
    case 1:
      return (
        <Badge variant="default" className="bg-green-500 hover:bg-green-600">
          Aktif
        </Badge>
      )
    default:
      return <Badge variant="outline">Unknown</Badge>
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export function StudentCard({ student }: StudentCardProps) {
  // Calculate progress percentage (assuming 30 juz total)
  const juzProgress = (student.totalJuz / 30) * 100

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="text-sm font-medium">{getInitials(student.name)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{student.name}</CardTitle>
              <p className="text-sm text-muted-foreground">ID: {student.id}</p>
            </div>
          </div>
          {getStatusBadge(student.status)}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress Juz</span>
            <span>{student.totalJuz}/30</span>
          </div>
          <Progress value={juzProgress} className="h-2" />
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center">
              <BookOpen className="h-4 w-4 text-blue-500 mr-1" />
            </div>
            <div className="text-2xl font-bold text-blue-600">{student.totalAyatHafalan}</div>
            <div className="text-xs text-muted-foreground">Ayat Hafalan</div>
          </div>

          <div className="text-center space-y-1">
            <div className="flex items-center justify-center">
              <RotateCcw className="h-4 w-4 text-purple-500 mr-1" />
            </div>
            <div className="text-2xl font-bold text-purple-600">{student.totalAyatMurojah}</div>
            <div className="text-xs text-muted-foreground">Ayat Murojah</div>
          </div>

          <div className="text-center space-y-1">
            <div className="flex items-center justify-center">
              <Calendar className="h-4 w-4 text-orange-500 mr-1" />
            </div>
            <div className="text-2xl font-bold text-orange-600">{student.totalJuz}</div>
            <div className="text-xs text-muted-foreground">Juz</div>
          </div>
        </div>

        {/* Last Activity */}
        <div className="pt-2 border-t">
          <div className="text-sm text-muted-foreground">Terakhir hafalan: {formatDate(student.lastHafalanDate)}</div>
        </div>
      </CardContent>
    </Card>
  )
}
