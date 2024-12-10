import ClassListTeacher from "./ClassListTeacher";
import { User } from "@/types";
import ClassDelete from "./ClassDelete";


function ClassManaging({ classId }: { classId: User["classId"] }) {

  return (
    <div className="flex gap-1">
      <ClassListTeacher classId={classId} />
      <ClassDelete classId={classId} />
      
    </div>
  );
}

export default ClassManaging;
