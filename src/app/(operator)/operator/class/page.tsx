import { ClassFormCreate } from "@/components/pages/operator/class/ClassFormCreate";
import ClassList from "@/components/pages/operator/class/ClassList";
import ClassStudentSection from "@/components/pages/operator/class/ClassStudentSection";

async function OperatorClass() {
  return (
    <section className="max-h-full overflow-auto flex flex-col">

      {/* FITUR BARU BRANCH 2 SEARCH BAR */}
      <ClassList />

      <ClassFormCreate />

      <ClassStudentSection />
    </section>
  );
}

export default OperatorClass;
