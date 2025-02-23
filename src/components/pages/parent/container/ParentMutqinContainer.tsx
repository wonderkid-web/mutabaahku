import { ReactNode } from "react";

export default function ParentMutqinContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="max-h-full overflow-auto flex flex-col">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-customPrimary">Progress Mutabaah dari Siswa</h1>
      </div>

      {children}
    </section>
  );
}
