import { ClassFormCreate } from "@/components/pages/operator/class/ClassFormCreate";
import ClassList from "@/components/pages/operator/class/ClassList";
import { caller } from "@/server/serverClient";

async function OperatorClass() {
  const classes = await caller.getClass();
  return (
    <section className="max-h-full overflow-auto flex flex-col">
      <ClassList classes={classes} />

      <ClassFormCreate />
    </section>
  );
}

export default OperatorClass;
