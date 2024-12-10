import { Juz } from "@/types";

export const initialJuzData: Juz[] = [
  { id: 1, name: "Al-Fatihah 1 - Al-Baqarah 141" },
  { id: 2, name: "Al-Baqarah 142 - Al-Baqarah 252" },
  { id: 3, name: "Al-Baqarah 253 - Ali 'Imran 92" },
  { id: 4, name: "Ali 'Imran 93 - An-Nisa 23" },
  { id: 5, name: "An-Nisa 24 - An-Nisa 147" },
  { id: 6, name: "An-Nisa 148 - Al-Ma'idah 40" },
  { id: 7, name: "Al-Ma'idah 41 - Al-A'raf 88" },
  { id: 8, name: "Al-A'raf 89 - At-Tawbah 92" },
  { id: 9, name: "At-Tawbah 93 - Hud 5" },
  { id: 10, name: "Hud 6 - Ibrahim 52" },
  { id: 11, name: "Al-Hijr 1 - An-Nahl 50" },
  { id: 12, name: "Al-Isra 1 - Al-Kahf 75" },
  { id: 13, name: "Al-Kahf 76 - Taha 130" },
  { id: 14, name: "Al-Hajj 1 - Al-Furqan 20" },
  { id: 15, name: "Al-Furqan 21 - An-Naml 55" },
  { id: 16, name: "An-Naml 56 - Az-Zumar 32" },
  { id: 17, name: "Fussilat 1 - Az-Zariyat 30" },
  { id: 18, name: "Al-Hadid 1 - Al-Mujadila 11" },
  { id: 19, name: "Al-Mujadila 12 - At-Tahrim 12" },
  { id: 20, name: "Al-Mulk 1 - Al-Mursalat 50" },
  { id: 21, name: "Al-Fajr 1 - At-Takwir 29" },
  { id: 22, name: "Al-Infitar 1 - Al-Mutaffifin 56" },
  { id: 23, name: "Al-Mutaffifin 57 - Al-Hadid 29" },
  { id: 24, name: "Al-Qamar 1 - Al-Mulk 29" },
  { id: 25, name: "Al-Mulk 1 - Al-Mursalat 50" },
  { id: 26, name: "Al-Fajr 1 - At-Takwir 29" },
  { id: 27, name: "Al-Infitar 1 - Al-Mutaffifin 56" },
  { id: 28, name: "Al-Mutaffifin 57 - Al-Hadid 29" },
  { id: 29, name: "Al-Qamar 1 - Al-Mulk 29" },
  { id: 30, name: "Al-Mulk 1 - Al-Mursalat 50" },
];

export const daftarSurah = [
  "Al-Fatihah",
  "Al-Baqarah",
  "Ali 'Imran",
  "An-Nisa",
  "Al-Ma'idah",
  "Al-An'am",
  "Al-A'raf",
  "Al-Anfal",
  "At-Taubah",
  "Yunus",
  // ... tambahkan surah lainnya di sini
];


const phoneNumber = "083191319297";
const message = encodeURIComponent(
  "Assallamu'alaikum, saya tidak menemukan nama sekolah tempat saya bekerja pada list pendaftaran"
);
export const waLink = `https://wa.me/${phoneNumber}?text=${message}`;
