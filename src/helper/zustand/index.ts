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

export const setterGlobalClass = create<SetterGlobaClass>((set) => {
  const now = new Date();
  const month = now.getMonth() + 1; // 1 - 12
  const year = now.getFullYear(); // Tahun sekarang

  return {
    classId: null,
    teachers: null,
    month: month as SetterGlobaClass["month"],
    year: year as SetterGlobaClass["year"],
    setGlobalClass: (classId) => set(() => ({ classId })),
    setGlobalTeacher: (teachers) => set(() => ({ teachers })),
    setGlobalMonth: (month) => set(() => ({ month })),
    setGlobalYear: (year) => set(() => ({ year })),
  };
});
