import { ClassFormCreate } from "@/components/pages/operator/class/ClassFormCreate";
import ClassList from "@/components/pages/operator/class/ClassList";

function OperatorClass() {
  return (
    <section className="max-h-full overflow-auto flex flex-col">
      {/* @ts-ignore */}
      <ClassList />

      <ClassFormCreate />
    </section>
  );
}

export default OperatorClass;
