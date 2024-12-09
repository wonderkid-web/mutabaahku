import { SectionManageMutqin } from "@/components/pages/guru/mutqin/SectionManageMutqin";
import TahfidzHeader from "@/components/pages/guru/TahfidzHeader";
import { caller } from "@/server/serverClient";

async function MutqinPage() {
  const students = await caller.getStudents();

  return (
    <TahfidzHeader students={students}>
      <SectionManageMutqin />
    </TahfidzHeader>
  );
}

export default MutqinPage;
