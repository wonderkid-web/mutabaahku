import { TableTeacher } from "@/components/pages/operator/teacher/TableTeacher";
import { caller } from "@/server/serverClient";

export const revalidate = 0

async function TeacherPage() {
  const users = await caller.getUsers();
  return (
    <section className="max-h-full overflow-auto flex flex-col">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-customPrimary">Table Guru</h1>
      </div>

      <div className="container mx-auto p-4 flex-1">
        <TableTeacher data={users} />
      </div>
    </section>
  );
}

export default TeacherPage;
