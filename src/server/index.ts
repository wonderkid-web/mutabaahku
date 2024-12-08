import { z } from "zod";
import { procedure, router } from "./trpc";
import prisma from "@/helper/prisma";
import { formSchema } from "@/helper/schema";

export const appRouter = router({
  getStudents: procedure.query(async () => {
    return await prisma.student.findMany();
  }),
  getStudent: procedure
    .input(z.object({ student_id: z.number() }))
    .query(async ({ input: { student_id } }) =>
      prisma.student.findUnique({
        where: {
          id: student_id,
        },
        select: {
          id: true,
          status: true,
        },
      })
    ),
  getHafalan: procedure
    .input(z.object({ student_id: z.number() }))
    .query(async ({ input: { student_id } }) => {
      const now = new Date();
      const currentMonth = now.getMonth(); // Bulan sekarang (0-11)
      const currentYear = now.getFullYear(); // Tahun sekarang

      return await prisma.hafalan.findMany({
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
  addHafalan: procedure.input(formSchema).mutation(
    async ({ input }) =>
      await prisma.hafalan.create({
        data: { ...input, page_number: Number(input.page_number) },
      })
  ),
  getMurojah: procedure
    .input(z.object({ student_id: z.number() }))
    .query(async ({ input: { student_id } }) => {
      const now = new Date();
      const currentMonth = now.getMonth(); // Bulan sekarang (0-11)
      const currentYear = now.getFullYear(); // Tahun sekarang

      return await prisma.murojah.findMany({
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
  addMurojah: procedure.input(formSchema).mutation(
    async ({ input }) =>
      await prisma.murojah.create({
        data: { ...input, page_number: Number(input.page_number) },
      })
  ),
  updateMutqinLevel: procedure
    .input(z.object({ student_id: z.number(), status: z.number() }))
    .mutation(async ({ input: { status, student_id } }) => {
      return prisma.student.update({
        data: {
          status,
        },
        where: {
          id: student_id,
        },
      });
    }),
  updateSchoolOrigin: procedure
    .input(z.object({ email: z.string(), schoolOrigin: z.string() }))
    .mutation(
      async ({ input: { schoolOrigin, email } }) =>
        await prisma.user.update({
          data: {
            // @ts-ignore
            schoolOrigin,
          },
          where: {
            email,
          },
        })
    ),
  getClass: procedure.query(async () => await prisma.renamedclass.findMany()),
  createClass: procedure.input(z.object({ name: z.string() })).mutation(
    async ({ input: { name } }) =>
      await prisma.renamedclass.create({
        data: {
          name,
        },
      })
  ),
  deleteClass: procedure
    .input(z.object({ id: z.number() }))
    .mutation(
      async ({ input: { id } }) =>
        await prisma.renamedclass.delete({ where: { id } })
    ),
});

export type AppRouter = typeof appRouter;
