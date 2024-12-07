// Definisikan tipe data untuk informasi murid
export type Student = {
  id: number;
  name: string;
  class_id: number | null;
  teacher_id: number | null;
  total_ayat: number | null;
  total_juz: number | null;
  status: number;
  created_at: Date;
};

type ParamsStudentData = {
  name: string;
  student_id: number;
};

export type SetStudentData = {
  name: null | string;
  student_id: null | number;
  setStudentData: (newData: ParamsStudentData) => void;
};

export type Mutabaah = {
  student_id: number;
  surah: string;
  page_number: number;
  ayah?: {
    startFrom: number;
    endFrom: number;
  };
  created_at: Date;
  notes?: string; // Optional
};

export type Juz = {
  id: number;
  name: string;
  status?: "Selesai" | "Belum Selesai";
};
