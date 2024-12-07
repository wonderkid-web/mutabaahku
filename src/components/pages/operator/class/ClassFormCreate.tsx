"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { trpc } from "@/server/client";
import { useRouter } from "next/navigation";

const formCreateClassSchema = z.object({
  name: z.string({
    required_error: "Nama Kelas Wajib di isi.",
  }),
});

export function ClassFormCreate() {
  const router = useRouter();

  const createClass = trpc.createClass.useMutation({
    onSuccess: () => {
      toast.success("Berhasil Membuat Kelas Baru.");
      router.refresh();
    },
    onMutate: () => {
      toast.info("Proses Menambahkan Kelas Baru.");
    },
    onError: () => {
      toast.warning("Gagal Menambahkan Kelas");
    },
  });

  const form = useForm<z.infer<typeof formCreateClassSchema>>({
    resolver: zodResolver(formCreateClassSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit({ name }: z.infer<typeof formCreateClassSchema>) {
    createClass.mutate({ name });
    form.reset()
  }

  return (
    <div className="container mx-auto p-4 flex-1">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Catatan */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Kelas</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan Nama Kelas baru di sini"
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
            type="submit"
            className="bg-customPrimary hover:bg-customSecondary text-white"
          >
            Kirim
          </Button>
        </form>
      </Form>
    </div>
  );
}
