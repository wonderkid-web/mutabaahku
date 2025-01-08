import { Suspense } from "react";
import { TableTeacher } from "@/components/pages/operator/teacher/TableTeacher";
import { caller } from "@/server/serverClient";
import GridSkeleton from "@/components/skeleton/GridSkeleton";

export const revalidate = 0

function TeacherPage() {
  return (
    <section className="max-h-full overflow-auto flex flex-col">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-customPrimary">Table Guru</h1>
      </div>

      <div className="container mx-auto p-4 flex-1">
        <Suspense fallback={<GridSkeleton />}>
          {/* @ts-ignore */}
          <TableTeacherWrapper />
        </Suspense>
      </div>
    </section>
  );
}

// Wrapper untuk pengambilan data
const TableTeacherWrapper = async () => {
  const users = await caller.getUsers();
  return <TableTeacher data={users} />;
};

export default TeacherPage;
