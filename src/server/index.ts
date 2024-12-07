import { z } from "zod";
import { procedure, router } from "./trpc";
import prisma from "@/helper/prisma";
import { formSchema } from "@/helper/schema";

export const appRouter = router({
  getStudents: procedure.query(async () => {
    return await prisma.student.findMany();
  }),
  getMutabaah: procedure
    .input(z.object({ student_id: z.number() }))
    .query(async ({ input: { student_id } }) => {
      const now = new Date();
      const currentMonth = now.getMonth(); // Bulan sekarang (0-11)
      const currentYear = now.getFullYear(); // Tahun sekarang

      return await prisma.mutabaah.findMany({
        where: {
          student_id,
          created_at: {
            // Memfilter bulan yang sama dengan bulan sekarang dan tahun yang sama
            gte: new Date(currentYear, currentMonth, 1), // Mulai dari tanggal 1 bulan ini
            lt: new Date(currentYear, currentMonth + 1, 0), // Sampai sebelum bulan berikutnya
          },
        },
      });
    }),
  addMutabaah: procedure
    .input(formSchema)
    .mutation(
      async ({ input }) =>
        await prisma.mutabaah.create({
          data: { ...input, page_number: Number(input.page_number) },
        })
    ),
});

export type AppRouter = typeof appRouter;
