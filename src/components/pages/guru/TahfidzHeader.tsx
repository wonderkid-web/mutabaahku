import { TableMurid } from "@/components/pages/guru/murid/TableMurid";

import { Student } from "@/types";
import { ReactNode } from "react";

export default function TahfidzHeader({
  children, students, type
}: {
  children: ReactNode;
  students: Student[],
  type: "Hafalan" | "Muroj'ah" | "Mutqin"
}) {
  return (
    <section className="max-h-full overflow-auto flex flex-col">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-customPrimary">
          Kelas Baqarah {type}
        </h1>
      </div>

      <div className="container mx-auto p-4 flex-1">
        <h1 className="text-2xl font-bold text-customSecondary">
          Table Murid
        </h1>
        <TableMurid data={students} />
      </div>

      {children}
    </section>
  );
}
