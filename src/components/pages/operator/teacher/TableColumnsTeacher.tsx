import { ColumnDef } from "@tanstack/react-table"; // Pastikan Anda mengimpor ColumnDef
import { Button } from "@/components/ui/button"; // Ganti dengan komponen UI Anda
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Ganti dengan library yang Anda gunakan
import { ArrowDownUpIcon, EllipsisIcon } from "lucide-react"; // Ikon yang Anda gunakan
import { User } from "@/types";
import { formatedDate } from "@/helper";
import { trpc } from "@/server/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";

type UserActionProps = {
  user: User;
};

const DropdownMenuUser: React.FC<UserActionProps> = ({ user }) => {
  const router = useRouter();
  const deleteUser = trpc.deleteUser.useMutation();
  const updateRoleToTeacher = trpc.updateRoleToTeacher.useMutation();

  const handleDelete = () => {
    deleteUser.mutate(
      { id: user.id },
      {
        onSuccess: () => {
          toast.success("Guru berhasil dihapus!");
          router.refresh();
        },
        onError: (error) => {
          toast.warning(`Gagal menghapus guru: ${error.message}`);
        },
      }
    );
  };

  const handleUpdate = () => {
    updateRoleToTeacher.mutate(
      { id: user.id },
      {
        onSuccess: () => {
          toast.success("Berhasil Menetapkan Guru");
          router.refresh();
        },
        onError: (error) => {
          toast.warning(`Gagal Menetapkan Guru: ${error.message}`);
        },
      }
    );
  };

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
        <DropdownMenuItem onClick={() => handleDelete()}>
          Hapus User
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => handleUpdate()}>
          Tetapkan Sebagai Guru
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const TableColumnsTeacher: ColumnDef<User>[] = [
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
    cell: ({ row }) => (
      <div className="capitalize flex gap-1 items-center">
        <div className="relative rounded-full size-7 overflow-hidden">
          <Image src={row.original.image as string} alt="avatar" objectFit="cover" fill />
        </div>
        <p title={row.getValue("name")} className="max-w-20 lg:max-w-fit truncate">{row.getValue("name")}</p>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: () => <p className="text-white">Email</p>,
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
  },
  {
    accessorKey: "emailVerified",
    header: () => <p className="text-white">Email Diverifikasi</p>,
    cell: ({ row }) => {
      const isVerified: Date = row.getValue("emailVerified");
      return (
        <div>
          {isVerified
            ? formatedDate(isVerified) // Format tanggal jika diverifikasi
            : "Belum diverifikasi"}
        </div>
      );
    },
  },
  {
    accessorKey: "role",
    header: () => <p className="text-white">Role</p>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("role") || "Tidak ada"}</div>
    ),
  },
  {
    accessorKey: "schoolOrigin",
    header: () => <p className="text-white">Asal Sekolah</p>,
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("schoolOrigin") || "Tidak ada"}
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: () => <p className="text-white">Dibuat Pada</p>,
    cell: ({ row }) => formatedDate(row.getValue("createdAt")), // Format tanggal
  },
  {
    accessorKey: "updatedAt",
    header: () => <p className="text-white">Diperbarui Pada</p>,
    cell: ({ row }) => formatedDate(row.getValue("updatedAt")), // Format tanggal
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;
      return <DropdownMenuUser user={user} />;
    },
  },
];
