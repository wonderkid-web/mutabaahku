import { TableMurid } from "@/components/pages/guru/murid/TableMurid";

import { Parent, User } from "@/types";
import { ReactNode } from "react";
import { TableParent } from "../TableParent";

export default function ParentContainer({
  children, parents
}: {
  children: ReactNode;
  parents: Parent[],
}) {
  return (
    <section className="max-h-full overflow-auto flex flex-col">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-customPrimary">
          List Member Orang Tua
        </h1>
      </div>

      <div className="container mx-auto p-4 flex-1">
        <h1 className="text-2xl font-bold text-customSecondary">
          Table Orang Tua
        </h1>
        <TableParent data={parents} />
      </div>

      {children}
    </section>
  );
}
