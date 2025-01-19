import { SectionManageMutqin } from "@/components/pages/guru/mutqin/SectionManageMutqin";
import TahfidzHeader from "@/components/pages/guru/TahfidzHeader";
import { caller } from "@/server/serverClient";

export const revalidate = 0;

async function MutqinPage() {
  const students = await caller.getStudentsByClassId({ classId: 0 });
  console.log(students)

  return (
    <TahfidzHeader students={students || []} type="Mutqin">
      <SectionManageMutqin />
    </TahfidzHeader>
  );
}

export default MutqinPage;
