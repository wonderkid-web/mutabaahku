"use client";
import { trpc } from "@/server/client";
import { User } from "@/types";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function ClassDelete({ classId }: { classId: User["classId"] }) {
  const router = useRouter();
  const deleteClass = trpc.deleteClass.useMutation({
    onSuccess: () => {
      toast.success("Berhasil Menghapus Kelas.");
      router.refresh();
    },
    onMutate: () => {
      toast.info("Proses Menghapus Kelas.");
    },
    onError: () => {
      toast.warning("Gagal Menghapus Kelas.");
    },
  });

  return (
    <div
      className="px-3 hover:cursor-pointer hover:scale-105 transition  flex gap-1 items-center justify-center text-red-500 rounded-sm"
      onClick={() => deleteClass.mutate({ id: classId! })}
    >
      <Trash size={15} />
    </div>
  );
}

export default ClassDelete;
