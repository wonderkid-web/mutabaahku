import { FormMutabaah } from "@/components/pages/guru/FormMutabaah";
import { TableMurid } from "@/components/pages/guru/TableMurid";
import { Book, Users, Beaker, Music, Calculator, Palette } from "lucide-react";

// Define the type for our class data
type ClassInfo = {
  name: string;
  students: number;
  icon: keyof typeof iconMap;
};

// Map string keys to icon components
const iconMap = {
  Book,
  Users,
  Beaker,
  Music,
  Calculator,
  Palette,
};

// Sample data
const classes: ClassInfo[] = [
  { name: "Nahl 1A", students: 30, icon: "Calculator" },
  { name: "Maryam 2C", students: 25, icon: "Book" },
  { name: "Baqarah 4E", students: 28, icon: "Beaker" },
  { name: "Nahl 1A", students: 30, icon: "Calculator" },
  { name: "Maryam 2C", students: 25, icon: "Book" },
  { name: "Baqarah 4E", students: 28, icon: "Beaker" },
  { name: "Nahl 1A", students: 30, icon: "Calculator" },
  { name: "Maryam 2C", students: 25, icon: "Book" },
  // { name: "Music", students: 20, icon: "Music" },
  // { name: "Art", students: 22, icon: "Palette" },
  // { name: "Social Studies", students: 27, icon: "Users" },
];

export default function ClassList() {
  return (
    <section className="max-h-full overflow-auto flex flex-col">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-customPrimary">
          List Kelas Masuk
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
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
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-customPrimary">
          Table Murid Kelas
        </h1>
        <TableMurid />
      </div>

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-customPrimary">
          Tambah {"Mutaba'ah"} Murid
        </h1>
          <FormMutabaah />
      </div>
    </section>
  );
}
