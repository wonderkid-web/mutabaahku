import { TableMurid } from "@/components/pages/guru/murid/TableMurid";
import { caller } from "@/server/serverClient";
import { ReactNode } from "react";

export default async function TahfidzHeader({
  children,
}: {
  children: ReactNode;
}) {
  const students = await caller.getStudents();
  return (
    <section className="max-h-full overflow-auto flex flex-col">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-customPrimary">
          Kelas Baqarah 3A {"(Muroj'ah)"}
        </h1>
      </div>

      <div className="container mx-auto p-4 flex-1">
        <h1 className="text-2xl font-bold text-customSecondary">
          Table Murid Kelas 3A
        </h1>
        <TableMurid data={students} />
      </div>

      {children}
    </section>
  );
}
