"use client";
import { exportTableToExcel } from "@/helper";
import React, { MutableRefObject } from "react";
import { Button } from "../ui/button";

function ButtonMutabaahExport({
  tableRef,
}: {
  tableRef: MutableRefObject<HTMLTableElement>;
}) {
  return (
    <Button
      onClick={() => exportTableToExcel("Muroj'ah", tableRef.current)}
      className="text-customPrimary px-4 py-2 border-customSecondary mt-2"
      variant={"outline"}
    >
      Export to Excel
    </Button>
  );
}

export default ButtonMutabaahExport;
