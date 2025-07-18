"use client";

import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mutabaah } from "@/types";
import { toast } from "sonner";
import { trpc } from "@/server/client";
import { daftarSurah } from "@/static";
import { formSchemaHafalan } from "@/schema";
import { useHafalan } from "@/hooks";
import { setterGlobalClass } from "@/helper/zustand";

export function FormMutabaah({
  student_id,
}: {
  student_id: Mutabaah["student_id"];
}) {
  const { month, year } = setterGlobalClass();
  const date = new Date();
  const { refetch } = useHafalan({
    student_id,
    month: month || date.getMonth(),
    year: year || date.getFullYear(),
  });

  const { mutate: addHafalan, isPending } = trpc.addHafalan.useMutation<any>({
    onMutate: () => toast.info("Menambahkan Hafalan"),
    onSuccess: () => {
      refetch();
      toast.success("Berhasil Menambahkan data baru");
    },
    onError: (e) => {
      console.error(e);
      toast.error("Gagal Menambahkan data");
    },
  });

  const form = useForm<z.infer<typeof formSchemaHafalan>>({
    resolver: zodResolver(formSchemaHafalan),
    defaultValues: {
      created_at: new Date(),
      surah: daftarSurah[0].namaSurah,
      page_number: "1",
      ayah: {
        startFrom: "1",
        endFrom: "2",
      },
      notes: "",
      student_id: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchemaHafalan>) {
    addHafalan({ ...values, student_id });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Tanggal */}
        <FormField
          control={form.control}
          name="created_at"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Tanggal</FormLabel>
              <Popover>
                <PopoverTrigger
                  asChild
                  className="border border-customSecondary"
                >
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP", { locale: id })
                      ) : (
                        <span>Pilih tanggal</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                    locale={id}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Surah */}
        <FormField
          control={form.control}
          name="surah"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Surah</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border border-customSecondary">
                    <SelectValue placeholder="Pilih surah" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {daftarSurah.map((surah) => (
                    <SelectItem key={surah.namaSurah} value={surah.namaSurah}>
                      {surah.namaSurah}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Halaman */}
        <div className="flex gap-2 ">
          <FormField
            control={form.control}
            name="page_number"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Halaman</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={1}
                    {...field}
                    className="border border-customSecondary w-full"
                    placeholder="Masukkan nomor halaman"
                  />
                </FormControl>
                <FormDescription>
                  Masukan No. Halaman {"(contoh: 17)"}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Rentang Ayat */}

          <FormField
            control={form.control}
            name="ayah.startFrom"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Dimulai dari ayat</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={1}
                    placeholder="contoh: 1"
                    {...field}
                    className="border border-customSecondary"
                  />
                </FormControl>
                <FormDescription>Masukkan rentang (contoh:1)</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Rentang Ayat */}
          <FormField
            control={form.control}
            name="ayah.endFrom"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Berakhir di ayat</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={2}
                    max={daftarSurah
                      .find(
                        (surah) => surah.namaSurah == form.getValues("surah")
                      )
                      ?.banyakAyat.toString()}
                    placeholder="contoh: 2"
                    {...field}
                    className="border border-customSecondary"
                  />
                </FormControl>
                <FormDescription>
                  Masukkan rentang (contoh:5) | Batas ayat ini:{" "}
                  {
                    daftarSurah.find(
                      (surah) => surah.namaSurah == form.getValues("surah")
                    )?.banyakAyat
                  }{" "}
                  ayat.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Catatan */}
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Catatan</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Masukkan catatan Anda di sini"
                  className="resize-none border border-customSecondary"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isPending}
          className="bg-customPrimary hover:bg-customSecondary text-white w-full"
        >
          {!isPending ? "Kirim" : "Sedang Mengirim..."}
        </Button>
      </form>
    </Form>
  );
}
