import StudentSection from "@/components/pages/guru/StudentSection";

import { TableMurid } from "@/components/pages/guru/TableMurid";
import { caller } from "@/server/serverClient";

// const data = [
//   {
//     id: 1,
//     teacher_id: 1,
//     class_id: 1,
//     name: "Ahmad",
//     total_ayat: 100,
//     total_juz: 3,
//     status: "Active",
//     created_at: new Date("2024-12-06T13:41:17.207Z"),
//   },
//   {
//     id: 2,
//     teacher_id: 2,
//     class_id: 2,
//     name: "Fatimah",
//     total_ayat: 50,
//     total_juz: 1,
//     status: "Active",
//     created_at: new Date("2024-12-06T13:41:17.207Z"),
//   },
//   {
//     id: 3,
//     teacher_id: 1,
//     class_id: 1,
//     name: "Zaid",
//     total_ayat: 0,
//     total_juz: 0,
//     status: "Inactive",
//     created_at: new Date("2024-12-06T13:41:17.207Z"),
//   },
// ]

export default async function ClassList() {
  const students = await caller.getStudents();
  return (
    <section className="max-h-full overflow-auto flex flex-col">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-customPrimary">
          Kelas Baqarah 3A {"(Hafalan)"}
        </h1>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {classes.map((classInfo, index) => {
            const IconComponent = iconMap[classInfo.icon];
            return (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-customSecondary hover:border-customPrimary transition-colors duration-300 hover:cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-customPrimary">
                    {classInfo.name}
                  </h2>
                  <IconComponent className="w-6 h-6 text-customSecondary" />
                </div>
                <p className="text-customSecondary">
                  <span className="font-medium">{classInfo.students}</span>{" "}
                  Murid
                </p>
              </div>
            );
          })}
        </div> */}
      </div>

      <div className="container mx-auto p-4 flex-1">
        <h1 className="text-2xl font-bold text-customSecondary">
          Table Murid Kelas
        </h1>
        {/* <TableMurid data={data} /> */}
        <TableMurid data={students} />
      </div>

      <StudentSection />
    </section>
  );
}
