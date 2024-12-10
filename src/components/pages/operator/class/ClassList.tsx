import { Book } from "lucide-react";
import ClassManaging from "./ClassManaging";
import { Classes } from "@/types";

export default function ClassList({ classes }: { classes: Classes[] }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-customPrimary">
        List Kelas Masuk
      </h1>
      <ListClass classes={classes} />
    </div>
  );
}

const ListClass = ({ classes }: { classes: Classes[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
    {classes?.length ? (
      classes.map((classInfo, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg border border-customSecondary hover:border-customPrimary transition-colors duration-300 flex flex-col"
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold text-customPrimary">
              Kelas {classInfo.name}
            </h2>
            <Book className="w-6 h-6 text-customSecondary" />
          </div>
          <ClassManaging classId={classInfo.id} />
        </div>
      ))
    ) : (
      <h1>Belum Ada Kelas</h1>
    )}
  </div>
);
