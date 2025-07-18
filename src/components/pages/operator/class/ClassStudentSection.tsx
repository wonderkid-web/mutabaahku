"use client";
import { setterGlobalClass } from "@/helper/zustand";
import React from "react";
import { trpc } from "@/server/client";
import ClassTableStudent from "./ClassTableStudent";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const formStudentSchema = z.object({
  name: z.string({
    message: "Wajib Mengetik Nama Calon Siswa",
  }),
});

function ClassStudentSection() {
  const { classId } = setterGlobalClass();
  const {
    data: students,
    isLoading,
    refetch,
  } = trpc.getStudentsByClassId.useQuery(
    {
      classId: Number(classId),
    },
    {
      enabled: !!classId,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
  const addStudent = trpc.addStudent.useMutation({
    onSuccess: () => {
      toast.success("Berhasil Menambahkan Murid Baru");
      refetch();
    },
  });

  const form = useForm<z.infer<typeof formStudentSchema>>({
    resolver: zodResolver(formStudentSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = ({ name }: z.infer<typeof formStudentSchema>) => {
    toast.info(`${classId} & ${name}`);
    if (classId) {
      addStudent.mutate({
        classId,
        name,
      });
    }

    form.reset();
  };

  if (classId)
    return (
      <div className="flex flex-col gap-2 container">
        <ClassTableStudent isLoading={isLoading} students={students || []} />

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex gap-2 items-center p-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Form Calon Siswa Baru</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Masukkan Nama Calon Siswa Baru di sini"
                      className="resize-none border border-customSecondary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              disabled={addStudent.isPending}
              type="submit"
              className="bg-customSecondary self-end hover:bg-customSecondary text-white"
            >
              {!addStudent.isPending ? "Tambah" : "Menambah Murid..."}
            </Button>
          </form>
        </Form>
      </div>
    );
}

export default ClassStudentSection;
