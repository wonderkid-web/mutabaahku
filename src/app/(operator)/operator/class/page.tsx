
import { ClassFormCreate } from "@/components/pages/operator/class/ClassFormCreate";
import ClassList from "@/components/pages/operator/class/ClassList";
import ClassStudentSection from "@/components/pages/operator/class/ClassStudentSection";
import { caller } from "@/server/serverClient";

export const revalidate = 0;

async function OperatorClass() {
  const classes = await caller.getClass();
  
  return (
    <section className="max-h-full overflow-auto flex flex-col">
      <ClassList classes={classes} />

      <ClassFormCreate />

      <ClassStudentSection />
    </section>
  );
}

export default OperatorClass;
