// Definisikan tipe data untuk informasi murid

type Range<
  From extends number,
  To extends number,
  Acc extends number[] = []
> = Acc["length"] extends To
  ? From | Acc[number]
  : Range<From, To, [...Acc, Acc["length"]]>;

type YearRange<
  From extends number,
  To extends number,
  Acc extends number[] = []
> = Acc["length"] extends To
  ? From | Acc[number]
  : Range<From, To, [...Acc, Acc["length"]]>;

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

type ParamsParentData = {
  name: string;
  id: string;
};

export type SetStudentData = {
  name: null | string;
  student_id: null | number;
  setStudentData: (newData: ParamsStudentData) => void;
};

export type SetParentData = {
  name: null | string;
  id: null | string;
  setParentData: (newData: ParamsParentData) => void;
};

export type Parent = {
  image: string | null;
  id: string;
  name: string | null;
  role: string | null;
  classId: number | null;
  email: string;
  schoolOrigin: string | null;
  emailVerified: Date | null;
  createdAt: Date;
  updatedAt: Date;
  studentId: number | null;
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
  month: Range<1, 12> | null;
  year: 2023 | 2024 | 2025 | 2026 | 2027 | null;
  setGlobalClass: (classId: Classes["id"]) => void;
  setGlobalMonth: (month: SetterGlobaClass["month"]) => void;
  setGlobalYear: (month: SetterGlobaClass["year"]) => void;
  setGlobalTeacher: (
    teacherData: { classId: User["classId"]; id: User["id"] }[]
  ) => void;
};
