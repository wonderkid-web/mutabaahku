import { setStudentData } from "@/helper/zustand";
import { trpc } from "@/server/client";
import { Mutabaah } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Trash } from "lucide-react";
import { toast } from "sonner";

function DeleteMutabaah({ id }: { id: number }) {
  const { student_id } = setStudentData();
  const { refetch } = trpc.getHafalan.useQuery(
    { student_id: student_id! },
    { enabled: !!student_id }
  );
  const deleteMutabaah = trpc.deleteHafalan.useMutation({
    onSuccess: () => {
      refetch();
      toast.success("Berhasil Menghapus Mutabaah");
    },
    onMutate: () => {
      toast.info("Proses Menghapus");
    },
    onError: () => {
      toast.warning("Gagal Menghapus Mutabaah!");
    },
  });

  return (
    <button
      className="flex justify-center items-center bg-red-400 px-3 py-1 rounded-sm text-white"
      onClick={() => deleteMutabaah.mutate({ id })}
    >

      <Trash color="white" size={14} />
    </button>
  );
}

// Definisikan kolom-kolom tabel
export const TableColumnsHafalan: ColumnDef<Mutabaah>[] = [
  {
    accessorKey: "id",
    header: () => <p className="text-white">No.</p>,
    cell: ({ row }) => (
      <div className="min-h-8 flex items-center">{row.index + 1}</div>
    ),
  },
  {
    accessorKey: "created_at",
    header: () => <p className="text-white">Tanggal</p>,
    cell: ({ row }) => {
      const date = format(row.getValue("created_at"), "dd");
      return <div className="min-h-8 flex items-center">{date}</div>;
    },
  },
  {
    accessorKey: "surah",
    header: () => <p className="text-white">Surah</p>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("surah")}</div>
    ),
  },
  {
    accessorKey: "page_number",
    header: () => <p className="text-white">Halaman</p>,
    cell: ({ row }) => (
      <div className="lg:ml-6">{row.getValue("page_number")}</div>
    ),
  },
  {
    accessorKey: "ayah",
    header: () => <p className="text-white">Ayat</p>,
    cell: ({ row }) => {
      const ayah = row.getValue("ayah") as Mutabaah["ayah"];
      return (
        <div>
          {" "}
          {ayah?.startFrom} - {ayah?.endFrom}
        </div>
      );
    },
  },
  {
    accessorKey: "notes",
    header: () => <p className="text-white">Keterangan</p>,
    cell: ({ row }) => <div>{row.getValue("notes")}</div>,
  },
  {
    id: "action",
    enableHiding: true,
    cell: ({ row }) => <DeleteMutabaah id={row.original.id} />,
  },
];
