import StudentSection from "@/components/pages/guru/hafalan/StudentSection";
import TahfidzHeader from "@/components/pages/guru/TahfidzHeader";
import { caller } from "@/server/serverClient";

export const revalidate = 0;

async function HafalanPage() {
  const students = await caller.getStudentsByClassId({ classId: 0 });
  return (
    <TahfidzHeader students={students || []} type="Hafalan">
      <StudentSection />
    
    </TahfidzHeader>
  );
}

export default HafalanPage;
