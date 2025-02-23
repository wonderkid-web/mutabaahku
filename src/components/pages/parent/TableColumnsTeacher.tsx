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
import { setParentData } from "@/helper/zustand";

type UserActionProps = {
  user: User;
};

const DropdownMenuParent: React.FC<UserActionProps> = ({ user }) => {
  const router = useRouter();
  const deleteUser = trpc.deleteUser.useMutation();
  const updateRole = trpc.updateRole.useMutation();
  const demoteTeacherRole = trpc.demoteTeacherRole.useMutation();
  const demoteParentRole = trpc.demoteParentRole.useMutation();

  const handleDelete = () => {
    deleteUser.mutate(
      { id: user.id },
      {
        onSuccess: () => {
          toast.success("Member berhasil dihapus!");
          router.refresh();
        },
        onError: (error) => {
          toast.warning(`Gagal menghapus Member: ${error.message}`);
        },
      }
    );
  };

  const handleUpdateRole = (role: "parent" | "teacher") => {
    updateRole.mutate(
      { id: user.id, role },
      {
        onSuccess: () => {
          toast.success("Berhasil Menetapkan Member");
          router.refresh();
        },
        onError: (error) => {
          toast.warning(`Gagal Menetapkan Member: ${error.message}`);
        },
      }
    );
  };

  const handleDemote = () => {
    demoteTeacherRole.mutate(
      { id: user.id },
      {
        onSuccess: () => {
          toast.success("Berhasil Menurunkan Jabatan Member");
          router.refresh();
        },
        onError: (error) => {
          toast.warning(`Gagal Menurunkan Jabatan Member: ${error.message}`);
        },
      }
    );
  };

  const handleDemoteParent = () => {
    demoteParentRole.mutate(
      { id: user.id },
      {
        onSuccess: () => {
          toast.success("Berhasil Menurunkan Jabatan Orang Tua");
          router.refresh();
        },
        onError: (error) => {
          toast.warning(`Gagal Menurunkan Jabatan Orang Tua: ${error.message}`);
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

        <DropdownMenuItem onClick={() => handleUpdateRole("parent")}>
          Tetapkan Sebagai Orang Tua
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleDemoteParent()}>
          Hapus Jabatan Orang Tua
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() =>
            setParentData.getState().setParentData({
              id: user.id,
              name: user.name!,
            })
          }
        >
          Lihat detail
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const StudentName = ({ id }: { id: number }) => {
  const { data } = trpc.getStudent.useQuery({
    student_id: id,
  });

  console.log(data);
  return (
    <div className="capitalize">
      {data?.name || "Tidak Ada Nama"}
    </div>
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
          <Image
            src={row.original.image as string}
            alt="avatar"
            objectFit="cover"
            fill
          />
        </div>
        <p
          title={row.getValue("name")}
          className="max-w-20 lg:max-w-fit truncate"
        >
          {row.getValue("name")}
        </p>
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
    accessorKey: "studentId",
    header: () => <p className="text-white">Nama Anak</p>,
    cell: ({ row }) => {
      return <StudentName id={row.getValue("studentId")} />;
    },
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
      return <DropdownMenuParent user={user} />;
    },
  },
];
