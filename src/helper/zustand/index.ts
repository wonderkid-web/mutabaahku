import { SetParentData, SetStudentData, SetterGlobaClass } from "@/types";
import { create } from "zustand";

export const setStudentData = create<SetStudentData>((set) => ({
  name: null,
  student_id: null,
  setStudentData: ({ name, student_id }) => set(() => ({ name, student_id })),
}));

export const setParentData = create<SetParentData>((set) => ({
  id: null,
  name: null,
  setParentData: ({ id, name }) => set(() => ({ name, id })),
}));

export const setterGlobalClass = create<SetterGlobaClass>((set) => ({
  classId: null,
  teachers: null,
  setGlobalClass: (classId) => set(() => ({ classId })),
  setGlobalTeacher: (teachers) => set(() => ({ teachers })),
}));
