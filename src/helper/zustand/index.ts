import { SetStudentData } from "@/types";
import { create } from "zustand";

export const setStudentData = create<SetStudentData>((set) => ({
  name: null,
  student_id: null,
  setStudentData: ({ name, student_id }) => set(() => ({ name, student_id })),
}));
