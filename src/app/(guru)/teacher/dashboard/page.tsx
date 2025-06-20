import HafalanDashboard from "@/components/pages/guru/dashboard/Dashboard";
import { caller } from "@/server/serverClient";

export const dynamic = "force-dynamic"

export default async function Page() {
  const data = await caller.getTeacherDashboard();
  return (
    <HafalanDashboard
      className={data.className || "-"}
      students={data.students || []}
      totalStudents={data.totalStudents}
    />
  );
}
