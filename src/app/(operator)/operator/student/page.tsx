import { caller } from "@/server/serverClient";

async function Student() {
  // const getStudents = await caller.getStudents();
  // const getTeachersWithNoClassId = await caller.getTeachersWithNoClassId();

  return (
    <div>
      <h1>Daftar Murid yang belum ada Guru dan Kelas</h1>
      {/* <pre>{JSON.stringify(getTeachersWithNoClassId, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(getStudents, null, 2)}</pre> */}
      {/* <pre>
        {JSON.stringify(
          [
            ...new Set(
              getStudents.map((student) => ({
                kelas: student.Renamedclass.name,
                murid: getStudents.map((local_student) => {
                  if (local_student.class_id === student.Renamedclass.id)
                    return local_student.name;
                }),
              }))
            ),
          ],
          null,
          2
        )}
      </pre> */}

      {
        // getStudents.map(classes=> (<p>{classes.}</p>))
      }
    </div>
  );
}

export default Student;
