"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BookOpen, Users, Calendar, TrendingUp, BookCheck } from "lucide-react"
import { PropsTeacherDashboard } from "@/types"
import { formatedDate } from "@/helper"

// Sample data - replace with your actual data


// function getStatusBadge(status: number) {
//   switch (status) {
//     case 0:
//       return <Badge variant="secondary">Tidak Aktif</Badge>
//     case 1:
//       return (
//         <Badge variant="default" className="bg-green-500 hover:bg-green-600">
//           Aktif
//         </Badge>
//       )
//     default:
//       return <Badge variant="outline">Unknown</Badge>
//   }
// }


function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

export default function HafalanDashboard({className, totalStudents, students} : PropsTeacherDashboard) {

  // Calculate statistics
  const totalAyatHafalan = students.reduce((sum, student) => sum + student.totalAyatHafalan, 0)
  const totalAyatMurojah = students.reduce((sum, student) => sum + student.totalAyatMurojah, 0)
  const totalJuz = students.reduce((sum, student) => sum + student.totalJuz, 0)
  const activeStudents = students.filter((student) => student.status === 1).length
  const averageAyatPerStudent = Math.round(totalAyatHafalan / totalStudents)

  return (
    <div className="min-h-screen overflow-auto bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">{className}</h1>
          <p className="text-gray-600">Dashboard Hafalan Al-Quran</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Siswa</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalStudents}</div>
              <p className="text-xs text-muted-foreground">{activeStudents} siswa aktif</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Ayat Hafalan</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalAyatHafalan}</div>
              <p className="text-xs text-muted-foreground">Rata-rata {averageAyatPerStudent} ayat/siswa</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Ayat Murojah</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalAyatMurojah}</div>
              <p className="text-xs text-muted-foreground">Ayat yang sudah diulang</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Juz</CardTitle>
              <BookCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalJuz}</div>
              <p className="text-xs text-muted-foreground">Juz yang telah dihafal</p>
            </CardContent>
          </Card>
        </div>

        {/* Students Table */}
        <Card>
          <CardHeader>
            <CardTitle>Data Siswa</CardTitle>
            <CardDescription>Daftar siswa dan progress hafalan mereka</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto max-w-[320px] md:max-w-full">
              <Table className="min-w-[500px]">
                <TableHeader>
                  <TableRow>
                    <TableHead>Siswa</TableHead>
                    <TableHead className="text-center">Ayat Hafalan</TableHead>
                    <TableHead className="text-center">Ayat Murojah</TableHead>
                    <TableHead className="text-center">Juz</TableHead>
                    {/* <TableHead className="text-center">Status</TableHead> */}
                    <TableHead>Terakhir Hafalan</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="text-xs">{getInitials(student.name)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{student.name}</div>
                            <div className="text-sm text-gray-500">ID: {student.id}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {student.totalAyatHafalan}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                          {student.totalAyatMurojah}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                          {student.totalJuz}
                        </Badge>
                      </TableCell>
                      {/* <TableCell className="text-center">{getStatusBadge(student.status)}</TableCell> */}
                      <TableCell>
                        <div className="text-sm">{formatedDate(student.lastHafalanDate || new Date())}</div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
