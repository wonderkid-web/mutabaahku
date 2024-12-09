import StudentSection from "@/components/pages/guru/hafalan/StudentSection";
import TahfidzHeader from "@/components/pages/guru/TahfidzHeader";
import { caller } from "@/server/serverClient";

async function HafalanPage() {
  const students = await caller.getStudents();
  return (
    <TahfidzHeader students={students}>
      <StudentSection />
    </TahfidzHeader>
  );
}

export default HafalanPage;
