"use client";

import * as React from "react";
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

const formSchema = z.object({
  tanggal: z.date({
    required_error: "Tanggal harus diisi.",
  }),
  namaSurah: z.string({
    required_error: "Nama surah harus dipilih.",
  }),
  rentangAyat: z
    .string()
    .regex(/^\d+-\d+$/, "Rentang ayat harus dalam format 'awal-akhir'."),
  catatan: z.string().min(1, "Catatan harus diisi."),
});

const daftarSurah = [
  "Al-Fatihah",
  "Al-Baqarah",
  "Ali 'Imran",
  "An-Nisa",
  "Al-Ma'idah",
  "Al-An'am",
  "Al-A'raf",
  "Al-Anfal",
  "At-Taubah",
  "Yunus",
  // ... tambahkan surah lainnya di sini
];

export function FormMutabaah() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tanggal: new Date(),
      namaSurah: "",
      rentangAyat: "",
      catatan: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Di sini Anda biasanya akan mengirim data ke backend
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="tanggal"
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
        <FormField
          control={form.control}
          name="namaSurah"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Surah</FormLabel>

              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="border border-customSecondary">
                    <SelectValue placeholder="Pilih surah" className="border border-customSecondary"/>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {daftarSurah.map((surah) => (
                    <SelectItem key={surah} value={surah}>
                      {surah}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rentangAyat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rentang Ayat</FormLabel>
              <FormControl>
                <Input
                  placeholder="contoh: 1-5"
                  {...field}
                  className="border border-customSecondary"
                />
              </FormControl>
              <FormDescription>
                Masukkan rentang ayat dalam format {"'awal-akhir'"} (contoh: 1-5)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="catatan"
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
        <Button
          type="submit"
          className="bg-customPrimary hover:bg-customSecondary text-white"
        >
          Kirim
        </Button>
      </form>
    </Form>
  );
}
