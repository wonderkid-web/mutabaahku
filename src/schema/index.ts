import { z } from "zod";

export const formSchemaHafalan = z.object({
  created_at: z.date({
    required_error: "Tanggal harus diisi.",
  }),
  surah: z.string({
    required_error: "Nama surah harus dipilih.",
  }),
  page_number: z
    .string({
      required_error: "Halaman Wajib Di isi!",
    })
    .or(z.number()),
  ayah: z.object({
    startFrom: z
      .string()
      .or(z.number())
      .refine((val) => val !== "", { message: "Gaboleh kosong, wajib di isi" }),
    endFrom: z
      .string()
      .or(z.number())
      .refine((val) => val !== "", { message: "Gaboleh kosong, wajib di isi" }),
  }),
  notes: z.string().min(1, "Catatan harus diisi."),
  student_id: z.number(),
});
