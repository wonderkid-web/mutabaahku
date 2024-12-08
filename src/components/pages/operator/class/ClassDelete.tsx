"use client";
import { trpc } from "@/server/client";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function ClassDelete({ id }: { id: number }) {
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
    <div className="flex gap-1 items-center">
      <Trash
        color="red"
        size={15}
        className="hover:cursor-pointer"
        onClick={() => deleteClass.mutate({ id })}
      />
    </div>
  );
}

export default ClassDelete;
