// Definisikan tipe data untuk informasi murid
export type Student = {
  id: number;
  name: string;
  class_id: number | null;
  teacher_id: string | null;
  total_ayat: number | null;
  total_juz: number | null;
  status: number;
  created_at: Date | string;
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
  id: number;
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

export type User = {
  id: string; // Kolom 'id' adalah primary key bertipe text
  name: string | null; // Kolom 'name' bersifat nullable
  email: string; // Kolom 'email' tidak nullable dan harus unik
  emailVerified: string | Date | null; // Tipe 'timestamp without time zone' biasanya direpresentasikan sebagai string ISO
  image: string | null; // Kolom 'image' nullable
  createdAt: Date | string; // Tipe 'timestamp without time zone' direpresentasikan sebagai Date ISO
  updatedAt: Date | string; // Sama dengan 'createdAt'
  role: string | null; // Nullable, tipe text
  schoolOrigin: string | null; // Nullable, tipe text
  classId: number | null;
};

export type Classes = {
  created_at: Date | null;
  name: string;
  id: number;
};

export type SetterGlobaClass = {
  classId: Classes["id"] | null;
  teachers: { classId: User["classId"]; id: User["id"] }[] | null;
  setGlobalClass: (classId: Classes["id"]) => void;
  setGlobalTeacher: (teacherData:  { classId: User["classId"]; id: User["id"] }[]) => void;
};
