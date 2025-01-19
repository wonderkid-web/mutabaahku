import { string, z } from "zod";
import { procedure, router } from "./trpc";
import prisma from "@/helper/prisma";
import { formSchema } from "@/helper/schema";
import { auth } from "../../auth";

export const appRouter = router({
  getStudents: procedure.query(async () => {
    return await prisma.student.findMany({
      include: {
        Renamedclass: true,
      },
    });
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
  getStudentsByClassId: procedure
    .input(z.object({ classId: z.number().optional() }))
    .query(async ({ input: { classId } }) => {
      if (classId) {
        return prisma.student.findMany({
          where: {
            class_id: classId,
          },
        });
      } else {
        const session = await auth();

        if (session?.user?.classId) {
          const class_id = session.user.classId;
          return prisma.student.findMany({
            where: {
              class_id,
            },
          });
        }
      }
    }),

  addStudent: procedure
    .input(z.object({ name: z.string(), classId: z.number() }))
    .mutation(async ({ input: { classId, name } }) => {
      const teacher_id = await prisma.user.findFirstOrThrow({
        where: { classId: classId },
        select: { id: true },
      });

      console.log(teacher_id);

      const student = await prisma.student.create({
        data: {
          name,
          class_id: classId,
          teacher_id: teacher_id?.id,
        },
      });

      console.log(student);
    }),

  deleteStudent: procedure
    .input(z.object({ id: z.number() }))
    .mutation(
      async ({ input: { id } }) =>
        await prisma.student.delete({ where: { id } })
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
  deleteHafalan: procedure
    .input(z.object({ id: z.number() }))
    .mutation(
      async ({ input: { id } }) =>
        await prisma.hafalan.delete({ where: { id } })
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
  deleteMurojah: procedure
    .input(z.object({ id: z.number() }))
    .mutation(
      async ({ input: { id } }) =>
        await prisma.murojah.delete({ where: { id } })
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
  getUsers: procedure.query(async () => await prisma.user.findMany()),
  getUser: procedure
    .input(z.object({ id: z.string() }))
    .query(
      async ({ input: { id } }) =>
        await prisma.user.findUnique({ where: { id } })
    ),
  deleteUser: procedure
    .input(z.object({ id: z.string() }))
    .mutation(
      async ({ input: { id } }) => await prisma.user.delete({ where: { id } })
    ),

  getTeachers: procedure.query(
    async () =>
      await prisma.user.findMany({
        where: {
          role: {
            equals: "teacher",
          },
        },
      })
  ),
  getTeachersWithNoClassId: procedure.query(
    async () =>
      await prisma.user.findMany({
        where: {
          role: {
            equals: "teacher",
          },
          classId: {
            equals: null,
          },
        },
      })
  ),

  updateRoleToTeacher: procedure.input(z.object({ id: z.string() })).mutation(
    async ({ input: { id } }) =>
      await prisma.user.update({
        where: {
          id,
        },
        data: {
          role: "teacher",
        },
      })
  ),
  demoteRoleToTeacher: procedure.input(z.object({ id: z.string() })).mutation(
    async ({ input: { id } }) =>
      await prisma.user.update({
        where: {
          id,
        },
        data: {
          role: null,
          classId: null,
        },
      })
  ),
  updateClassToTeacher: procedure
    .input(
      z.object({
        id: z.string(),
        classId: z.number(),
        currentTeacherId: z.string().nullable(),
      })
    )
    .mutation(async ({ input: { classId, id, currentTeacherId } }) => {
      if (currentTeacherId) {
        await prisma.user.updateMany({
          where: { id: currentTeacherId },
          data: { classId: null },
        });
      }
      await prisma.user.updateMany({ where: { id }, data: { classId } });
    }),
});

export type AppRouter = typeof appRouter;
