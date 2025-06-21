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
          name: true,
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
  getChildrensById: procedure
    .input(z.object({ id: z.number().optional() }))
    .query(async ({ input: { id } }) => {
      const session = await auth();

      if (session?.user?.classId) {
        const class_id = session.user.classId;
        return prisma.student.findMany({
          where: {
            id,
          },
        });
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
  getHafalanByMonth: procedure
    .input(
      z.object({
        student_id: z.number(),
        month: z.number().min(1).max(12), // 1 = Jan, 12 = Des
        year: z.number().min(2000).max(2100),
      })
    )
    .query(async ({ input }) => {
      const { student_id, month, year } = input;

      // Bulan di JS 0-indexed (Januari = 0)
      const startDate = new Date(year, month - 1, 1);
      const endDate = new Date(year, month, 1); // bulan berikutnya tanggal 1

      return await prisma.hafalan.findMany({
        where: {
          student_id,
          created_at: {
            gte: startDate,
            lt: endDate,
          },
        },
        orderBy: {
          created_at: "asc",
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
  getMurojahByMonth: procedure
    .input(
      z.object({
        student_id: z.number(),
        month: z.number().min(1).max(12), // 1 = Jan, 12 = Des
        year: z.number().min(2000).max(2100),
      })
    )
    .query(async ({ input }) => {
      const { student_id, month, year } = input;

      // Bulan di JS 0-indexed (Januari = 0)
      const startDate = new Date(year, month - 1, 1);
      const endDate = new Date(year, month, 1); // bulan berikutnya tanggal 1

      return await prisma.murojah.findMany({
        where: {
          student_id,
          created_at: {
            gte: startDate,
            lt: endDate,
          },
        },
        orderBy: {
          created_at: "asc",
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
  getParents: procedure.query(
    async () =>
      await prisma.user.findMany({
        where: {
          role: "parent",
        },
      })
  ),
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

  updateRole: procedure
    .input(z.object({ id: z.string(), role: z.enum(["teacher", "parent"]) }))
    .mutation(
      async ({ input: { id, role } }) =>
        await prisma.user.update({
          where: {
            id,
          },
          data: {
            role,
          },
        })
    ),
  demoteTeacherRole: procedure.input(z.object({ id: z.string() })).mutation(
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
  demoteParentRole: procedure.input(z.object({ id: z.string() })).mutation(
    async ({ input: { id } }) =>
      await prisma.user.update({
        where: {
          id,
        },
        data: {
          role: null,
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

  updateChildrenToParent: procedure
    .input(z.object({ parentId: z.string(), childrenId: z.number() }))
    .mutation(
      async ({ input: { parentId, childrenId } }) =>
        await prisma.user.update({
          where: {
            id: parentId,
          },
          data: {
            studentId: childrenId,
          },
        })
    ),

  getHafalanTimeline: procedure
    .input(z.object({ studentId: z.number() }))
    .query(async ({ input }) => {
      return await prisma.hafalan.groupBy({
        by: ["created_at"],
        where: {
          student_id: input.studentId,
        },
        _count: true,
        orderBy: {
          created_at: "asc",
        },
      });
    }),
  getMurojahStatsByTeacher: procedure
    .input(z.object({ teacherId: z.string() }))
    .query(async ({ input }) => {
      const students = await prisma.student.findMany({
        where: { teacher_id: input.teacherId },
        select: {
          id: true,
          name: true,
          murojah: {
            select: {
              ayah: true,
            },
          },
        },
      });

      return students.map((s) => ({
        studentId: s.id,
        name: s.name,
        totalEntry: s.murojah.length,
        totalAyat: s.murojah.reduce(
          (sum, m) =>
            sum +
            (Array.isArray(m.ayah)
              ? m.ayah.length
              : Object.keys(m.ayah!).length),
          0
        ),
        // @ts-ignore
        ayah: s.murojah.reduce((sum, m) => sum + m.ayah!.endFrom || 0, 0),
      }));
    }),

  getTeacherDashboard: procedure.query(async () => {
    const session = await auth();

    if (!session?.user?.id) throw new Error("Unauthorized");

    const classId = session.user.classId;

    // Ambil data murid berdasarkan teacher_id
    const students = await prisma.student.findMany({
      where: {
        class_id: classId,
      },
      include: {
        hafalan: true,
        murojah: true,
        Renamedclass: true,
      },
    });

    if (!students.length) {
      return {
        className: null,
        totalStudents: 0,
        students: [],
        stats: {
          totalAyat: 0,
          totalJuz: 0,
          totalMurojahAyat: 0,
        },
      };
    }

    const className = students[0].Renamedclass.name;

    const studentStats = students.map((s) => {
      const totalAyatHafalan = s.hafalan.reduce((sum, h) => {
        const hafalan = h.ayah as { startFrom: number; endFrom: number };

        return sum + (hafalan.endFrom - hafalan.startFrom);
      }, 0);

      const totalAyatMurojah = s.murojah.reduce((sum, m) => {
        const ayah = m.ayah as { startFrom: number; endFrom: number };
        return sum + (ayah.endFrom - ayah.startFrom);
      }, 0);

      return {
        id: s.id,
        name: s.name,
        totalAyatHafalan,
        totalAyatMurojah,
        totalJuz: s.status,
        status: s.status,
        lastHafalanDate:
          s.hafalan.length > 0
            ? s.hafalan[s.hafalan.length - 1].created_at
            : null,
      };
    });

    return {
      className,
      totalStudents: students.length,
      students: studentStats,
      stats: {
        totalAyat: studentStats.reduce((sum, s) => sum + s.totalAyatHafalan, 0),
        totalJuz: students.reduce((sum, s) => sum + s.status, 0),
        totalMurojahAyat: studentStats.reduce(
          (sum, s) => sum + s.totalAyatMurojah,
          0
        ),
      },
    };
  }),
});

export type AppRouter = typeof appRouter;
