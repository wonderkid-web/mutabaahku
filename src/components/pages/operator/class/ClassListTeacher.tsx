"use client";
import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown, Plus, User as UserIcon } from "lucide-react";
import Image from "next/image";

import logo from "@/../public/2.png";
import { trpc } from "@/server/client";
import Loader from "@/components/Loader";
import { User } from "@/types";
import { toast } from "sonner";
import { setterGlobalClass } from "@/helper/zustand";

function ClassListTeacher({ classId }: { classId: User["classId"] }) {
  const { data: teachers, refetch } = trpc.getUsers.useQuery();
  const updateClassToTeacher = trpc.updateClassToTeacher.useMutation({
    onSuccess: () => {
      toast.success("Berhasil Menentukan Kelas");
      refetch();
    },
    onMutate: () => {
      toast.info("Proses Menentukan Kelas");
    },
    onError: () => {
      toast.warning("Gagal Menentukan Kelas");
    },
  });
  const { setGlobalClass } = setterGlobalClass();

  const { isMobile } = useSidebar();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground relative overflow-hidden">
            <Image src={logo} alt="logo" objectFit="cover" fill />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Guru</span>
            <span className="truncate text-xs">
              {teachers?.find((t) => t.classId == classId)
                ? teachers?.find((t) => t.classId == classId)?.name
                : "Belum Ada Guru"}
            </span>
          </div>
          <ChevronsUpDown className="ml-auto" />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        align="start"
        side={isMobile ? "bottom" : "right"}
        sideOffset={4}
      >
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          {!teachers?.filter(
            (teacher) => teacher.role == "teacher" && !teacher.classId
          )
            ? "List Guru"
            : "Input Murid Baru"}
        </DropdownMenuLabel>
        {teachers?.length ? (
          teachers
            .filter((teacher) => teacher.role == "teacher" && !teacher.classId)
            .map((teacher) => (
              <DropdownMenuItem
                key={teacher.name}
                onClick={() =>
                  updateClassToTeacher.mutate({
                    id: teacher.id,
                    classId: classId!,
                  })
                }
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-sm border relative overflow-hidden">
                  <Image
                    src={teacher.image as string}
                    alt={`avatar ${teacher.name}`}
                    title={`avatar ${teacher.name}`}
                    objectFit="cover"
                    fill
                  />
                </div>
                {<p className="text-pretty w-full">{teacher.name}</p>}
              </DropdownMenuItem>
            ))
        ) : (
          <DropdownMenuItem className="gap-2 p-2">
            <div className="flex size-6 items-center justify-center rounded-sm border">
              <UserIcon className="size-4 shrink-0" />
            </div>
            <Loader />
            <DropdownMenuShortcut>-</DropdownMenuShortcut>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="gap-2 p-2"
          onClick={() => setGlobalClass(classId!)}
        >
          <div className="flex size-6 items-center justify-center rounded-md border bg-background">
            <Plus className="size-4" />
          </div>
          <div className="font-medium text-muted-foreground">Tambah</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ClassListTeacher;
