"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Form,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { trpc } from "@/server/client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { getSession, signOut } from "next-auth/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const allowedSchool = ["palestineIslamicSchool", "kotoIslamicSchool"]

const formSchoolOriginSchema = z.object({
  schoolOrigin: z.string({
    required_error: "Asal Sekolah wajib di isi.",
  }).refine(val=> allowedSchool.includes(val), {message: "Asal Sekolah belum terdaftar."}),
});

function SchoolOriginForm() {
  const { mutate } = trpc.updateSchoolOrigin.useMutation({
    onSuccess: () => {
      toast.success("Berhasil");
      toast("Berhasil Menambahkan Kelas.", {
        description: "Wajib Login Ulang!",
        action: {
          label: "keluar",
          onClick: async () => await signOut(),
        },

        duration: Infinity,
      });
    },
    onMutate: () => {
      toast.info("Menambahkan Asal Sekolah");
    },
    onError: () => {
      toast.warning("Gagal Menambahkan Asal Sekolah");
    },
  });

  const form = useForm<z.infer<typeof formSchoolOriginSchema>>({
    resolver: zodResolver(formSchoolOriginSchema),
    defaultValues: {
      schoolOrigin: "palestineIslamicSchool",
    },
  });

  const onSubmit = async ({
    schoolOrigin,
  }: z.infer<typeof formSchoolOriginSchema>) => {
    const session = await getSession();
    const email = session?.user?.email;

    if (email) {
      mutate({
        schoolOrigin,
        email,
      });
    }else{
      toast.warning("System Bermasalah atau Coba Login Ulang")
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="schoolOrigin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pilih Sesuai dengan Instansi Akhi/Ukhti</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="list nama sekolah" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="palestineIslamicSchool">
                    Palestine Islamic School
                  </SelectItem>
                  <SelectItem value="kotoIslamicSchool">
                    Koto Islamic School
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-customSecondary hover:bg-customSecondary text-white w-full"
        >
          Kirim
        </Button>
      </form>
    </Form>
  );
}

export default SchoolOriginForm;
