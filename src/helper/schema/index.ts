import { z } from "zod";

export const formSchema = z.object({
  created_at: z.union([z.date(), z.string()]),
  surah: z.string({
    required_error: "Nama surah harus dipilih.",
  }),
  page_number: z.union([z.string(), z.number()]),
  ayah: z.object({
    startFrom: z.union([z.string(), z.number()]),
    endFrom: z.union([z.string(), z.number()]),
  }),
  notes: z.string().min(1, "Catatan harus diisi."),
  student_id: z.number(),
});
