import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatedDate } from "@/helper";

import { setStudentData } from "@/helper/zustand";
import { trpc } from "@/server/client";
import { Student } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDownUpIcon, Delete, EllipsisIcon } from "lucide-react";
import { toast } from "sonner";

function ComponentDeleteStudent({
  id,
}: {
  id: number;
  classId: number;
}) {
  const { refetch } = trpc.getStudentsByClassId.useQuery({classId:0});
  const deleteStudent = trpc.deleteStudent.useMutation({
    onSuccess: () => {
      refetch();
      toast.success("Berhasil Menghapus Murid");
    },
    onMutate: () => {
      toast.info("Proses Menghapus");
    },
    onError: () => {
      toast.warning("Gagal Menghapus Murid!");
    },
  });
  return (
    <DropdownMenuItem onClick={() => deleteStudent.mutate({ id })}>
      Hapus Siswa
    </DropdownMenuItem>
  );
}

// Definisikan kolom-kolom tabel
export const TableColumnsMurid: ColumnDef<Student>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-white mx-0"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Nama
        <ArrowDownUpIcon className="text-white h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "created_at",
    header: () => <p className="text-white">Tanggal Input</p>,
    cell: ({ row }) => (
      <div className="capitalize">
        {formatedDate(row.getValue("created_at"))}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const student = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Buka menu</span>
              <EllipsisIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Aksi</DropdownMenuLabel>
            {student.id && student.class_id && (
              <ComponentDeleteStudent
                id={student.id}
                classId={student.class_id}
              />
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() =>
                setStudentData.getState().setStudentData({
                  student_id: student.id,
                  name: student.name,
                })
              }
            >
              Lihat detail
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
