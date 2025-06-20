"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, BookOpen, TrendingUp, Calendar, Award, Clock } from "lucide-react"

interface Student {
  id: number
  name: string
  totalAyatHafalan: number
  totalAyatMurojah: number
  totalJuz: number
  status: number
  lastHafalanDate: string
}

interface ClassData {
  className: string
  totalStudents: number
  students: Student[]
}

interface ClassOverviewProps {
  classData: ClassData
}

export function ClassOverview({ classData }: ClassOverviewProps) {
  const { className, totalStudents, students } = classData

  // Calculate statistics
  const totalAyatHafalan = students.reduce((sum, student) => sum + student.totalAyatHafalan, 0)
  const totalAyatMurojah = students.reduce((sum, student) => sum + student.totalAyatMurojah, 0)
  const totalJuz = students.reduce((sum, student) => sum + student.totalJuz, 0)
  const activeStudents = students.filter((student) => student.status === 1).length
  const averageAyatPerStudent = Math.round(totalAyatHafalan / totalStudents)
  const averageJuzPerStudent = (totalJuz / totalStudents).toFixed(1)

  // Find top performer
  const topPerformer = students.reduce((top, student) =>
    student.totalAyatHafalan > top.totalAyatHafalan ? student : top,
  )

  // Calculate recent activity (students who had hafalan in last 7 days)
  const oneWeekAgo = new Date()
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
  const recentlyActive = students.filter((student) => new Date(student.lastHafalanDate) >= oneWeekAgo).length

  return (
    <div className="space-y-6">
      {/* Class Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">{className}</h1>
          <Badge variant="outline" className="text-sm">
            {totalStudents} Siswa
          </Badge>
        </div>
        <p className="text-gray-600">Dashboard Hafalan Al-Quran</p>
      </div>

      {/* Main Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Siswa Aktif</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{activeStudents}</div>
            <p className="text-xs text-muted-foreground">dari {totalStudents} total siswa</p>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${(activeStudents / totalStudents) * 100}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Ayat Hafalan</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{totalAyatHafalan}</div>
            <p className="text-xs text-muted-foreground">Rata-rata {averageAyatPerStudent} ayat/siswa</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Juz</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{totalJuz}</div>
            <p className="text-xs text-muted-foreground">Rata-rata {averageJuzPerStudent} juz/siswa</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ayat Murojah</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{totalAyatMurojah}</div>
            <p className="text-xs text-muted-foreground">Ayat yang sudah diulang</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Siswa Terbaik</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-yellow-600">{topPerformer.name}</div>
            <p className="text-xs text-muted-foreground">{topPerformer.totalAyatHafalan} ayat hafalan</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aktivitas Minggu Ini</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-indigo-600">{recentlyActive}</div>
            <p className="text-xs text-muted-foreground">siswa aktif 7 hari terakhir</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
