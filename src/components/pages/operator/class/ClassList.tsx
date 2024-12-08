import { caller } from "@/server/serverClient";
import { Book, Trash } from "lucide-react";
import ClassDelete from "./ClassDelete";

async function ClassList() {
  const classes = await caller.getClass();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-customPrimary">
        List Kelas Masuk
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {classes?.length ? (
          classes.map((classInfo, index) => {
            return (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-customSecondary hover:border-customPrimary transition-colors duration-300 "
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-customPrimary">
                    Kelas {classInfo.name}
                  </h2>
                  <Book className="w-6 h-6 text-customSecondary" />
                </div>
                <ClassDelete id={classInfo.id} />
              </div>
            );
          })
        ) : (
          <h1>Belum Ada Kelas</h1>
        )}
      </div>
    </div>
  );
}

export default ClassList;
