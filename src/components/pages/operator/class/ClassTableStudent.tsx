import React from "react";
import { TableMurid } from "../../guru/murid/TableMurid";

import { Student } from "@/types";
import LoadingBarSkeleton from "@/components/skeleton/LoadingBarSkeleton";

function ClassTableStudent({
  isLoading,
  students,
}: {
  isLoading: boolean;
  students: Student[] | undefined;
}) {
  return (
    <div className="container mx-auto p-4 flex-1">
      <h1 className="text-2xl font-bold text-customSecondary">Table Murid</h1>
      {isLoading ? <LoadingBarSkeleton /> : students && <TableMurid data={students} />}
    </div>
  );
}

export default ClassTableStudent;
