import { formatedDate } from "@/helper";
import { caller } from "@/server/serverClient";
import React from "react";

async function page() {
  const data = await caller.getHafalanTimeline({ studentId: 50 });
  const teacher = await caller.getMurojahStatsByTeacher({
    teacherId: "cm63lo6m50000l703xv32rwja",
  });
  return (
    <div>
      {data.map((d, _) => (
        <p key={_}>{formatedDate(d.created_at!)}</p>
      ))}

      <pre>
        {JSON.stringify(teacher, null, 2)}
      </pre>
    </div>
  );
}

export default page;
