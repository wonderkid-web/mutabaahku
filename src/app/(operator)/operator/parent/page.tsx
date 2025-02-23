import StudentSection from "@/components/pages/parent/student/StudentSection";
import ParentContainer from "@/components/pages/parent/container/ParentContainer";
import { caller } from "@/server/serverClient";

export const revalidate = 0;

async function HafalanPage() {
  const parents = await caller.getParents();
  return (
    <ParentContainer parents={parents || []}>
      <StudentSection />
    </ParentContainer>
  );
}

export default HafalanPage;
