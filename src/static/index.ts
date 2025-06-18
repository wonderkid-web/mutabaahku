import { Juz } from "@/types";
import { Resolution } from "react-to-pdf";

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
  { namaSurah: "Al-Fatihah", banyakAyat: 7, juz: [1] },
  { namaSurah: "Al-Baqarah", banyakAyat: 286, juz: [1, 2, 3] },
  { namaSurah: "Ali 'Imran", banyakAyat: 200, juz: [3, 4] },
  { namaSurah: "An-Nisa'", banyakAyat: 176, juz: [4, 5, 6] },
  { namaSurah: "Al-Ma'idah", banyakAyat: 120, juz: [6, 7] },
  { namaSurah: "Al-An'am", banyakAyat: 165, juz: [7, 8] },
  { namaSurah: "Al-A'raf", banyakAyat: 206, juz: [8, 9] },
  { namaSurah: "Al-Anfal", banyakAyat: 75, juz: [9, 10] },
  { namaSurah: "At-Taubah", banyakAyat: 129, juz: [10, 11] },
  { namaSurah: "Yunus", banyakAyat: 109, juz: [11] },
  { namaSurah: "Hud", banyakAyat: 123, juz: [11, 12] },
  { namaSurah: "Yusuf", banyakAyat: 111, juz: [12, 13] },
  { namaSurah: "Ar-Ra'd", banyakAyat: 43, juz: [13] },
  { namaSurah: "Ibrahim", banyakAyat: 52, juz: [13] },
  { namaSurah: "Al-Hijr", banyakAyat: 99, juz: [14] },
  { namaSurah: "An-Nahl", banyakAyat: 128, juz: [14, 15] },
  { namaSurah: "Al-Isra'", banyakAyat: 111, juz: [15] },
  { namaSurah: "Al-Kahf", banyakAyat: 110, juz: [15, 16] },
  { namaSurah: "Maryam", banyakAyat: 98, juz: [16] },
  { namaSurah: "Ta-Ha", banyakAyat: 135, juz: [16, 17] },
  { namaSurah: "Al-Anbiya'", banyakAyat: 112, juz: [17] },
  { namaSurah: "Al-Hajj", banyakAyat: 78, juz: [17] },
  { namaSurah: "Al-Mu'minun", banyakAyat: 118, juz: [18] },
  { namaSurah: "An-Nur", banyakAyat: 64, juz: [18] },
  { namaSurah: "Al-Furqan", banyakAyat: 77, juz: [18, 19] },
  { namaSurah: "Ash-Shu'ara'", banyakAyat: 227, juz: [19] },
  { namaSurah: "An-Naml", banyakAyat: 93, juz: [19, 20] },
  { namaSurah: "Al-Qasas", banyakAyat: 88, juz: [20] },
  { namaSurah: "Al-Ankabut", banyakAyat: 69, juz: [20, 21] },
  { namaSurah: "Ar-Rum", banyakAyat: 60, juz: [21] },
  { namaSurah: "Luqman", banyakAyat: 34, juz: [21] },
  { namaSurah: "As-Sajda", banyakAyat: 30, juz: [21] },
  { namaSurah: "Al-Ahzab", banyakAyat: 73, juz: [21, 22] },
  { namaSurah: "Saba'", banyakAyat: 54, juz: [22] },
  { namaSurah: "Fatir", banyakAyat: 45, juz: [22] },
  { namaSurah: "Ya-Sin", banyakAyat: 83, juz: [22, 23] },
  { namaSurah: "As-Saffat", banyakAyat: 182, juz: [23] },
  { namaSurah: "Sad", banyakAyat: 88, juz: [23] },
  { namaSurah: "Az-Zumar", banyakAyat: 75, juz: [23, 24] },
  { namaSurah: "Ghafir", banyakAyat: 85, juz: [24] },
  { namaSurah: "Fussilat", banyakAyat: 54, juz: [24, 25] },
  { namaSurah: "Ash-Shura", banyakAyat: 53, juz: [25] },
  { namaSurah: "Az-Zukhruf", banyakAyat: 89, juz: [25] },
  { namaSurah: "Ad-Dukhan", banyakAyat: 59, juz: [25] },
  { namaSurah: "Al-Jathiya", banyakAyat: 37, juz: [25] },
  { namaSurah: "Al-Ahqaf", banyakAyat: 35, juz: [26] },
  { namaSurah: "Muhammad", banyakAyat: 38, juz: [26] },
  { namaSurah: "Al-Fath", banyakAyat: 29, juz: [26] },
  { namaSurah: "Al-Hujurat", banyakAyat: 18, juz: [26] },
  { namaSurah: "Qaf", banyakAyat: 45, juz: [26] },
  { namaSurah: "Adh-Dhariyat", banyakAyat: 60, juz: [26, 27] },
  { namaSurah: "At-Tur", banyakAyat: 49, juz: [27] },
  { namaSurah: "An-Najm", banyakAyat: 62, juz: [27] },
  { namaSurah: "Al-Qamar", banyakAyat: 55, juz: [27] },
  { namaSurah: "Ar-Rahman", banyakAyat: 78, juz: [27] },
  { namaSurah: "Al-Waqia", banyakAyat: 96, juz: [27] },
  { namaSurah: "Al-Hadid", banyakAyat: 29, juz: [27] },
  { namaSurah: "Al-Mujadila", banyakAyat: 22, juz: [28] },
  { namaSurah: "Al-Hashr", banyakAyat: 24, juz: [28] },
  { namaSurah: "Al-Mumtahana", banyakAyat: 13, juz: [28] },
  { namaSurah: "As-Saff", banyakAyat: 14, juz: [28] },
  { namaSurah: "Al-Jumu'a", banyakAyat: 11, juz: [28] },
  { namaSurah: "Al-Munafiqun", banyakAyat: 11, juz: [28] },
  { namaSurah: "At-Taghabun", banyakAyat: 18, juz: [28] },
  { namaSurah: "At-Talaq", banyakAyat: 12, juz: [28] },
  { namaSurah: "At-Tahrim", banyakAyat: 12, juz: [28] },
  { namaSurah: "Al-Mulk", banyakAyat: 30, juz: [29] },
  { namaSurah: "Al-Qalam", banyakAyat: 52, juz: [29] },
  { namaSurah: "Al-Haqqa", banyakAyat: 52, juz: [29] },
  { namaSurah: "Al-Ma'arij", banyakAyat: 44, juz: [29] },
  { namaSurah: "Nuh", banyakAyat: 28, juz: [29] },
  { namaSurah: "Al-Jinn", banyakAyat: 28, juz: [29] },
  { namaSurah: "Al-Muzzammil", banyakAyat: 20, juz: [29] },
  { namaSurah: "Al-Muddathir", banyakAyat: 56, juz: [29] },
  { namaSurah: "Al-Qiyama", banyakAyat: 40, juz: [29] },
  { namaSurah: "Al-Insan", banyakAyat: 31, juz: [29] },
  { namaSurah: "Al-Mursalat", banyakAyat: 50, juz: [29] },
  { namaSurah: "An-Naba'", banyakAyat: 40, juz: [30] },
  { namaSurah: "An-Nazi'at", banyakAyat: 46, juz: [30] },
  { namaSurah: "Abasa", banyakAyat: 42, juz: [30] },
  { namaSurah: "At-Takwir", banyakAyat: 29, juz: [30] },
  { namaSurah: "Al-Infitar", banyakAyat: 19, juz: [30] },
  { namaSurah: "Al-Mutaffifin", banyakAyat: 36, juz: [30] },
  { namaSurah: "Al-Inshiqaq", banyakAyat: 25, juz: [30] },
  { namaSurah: "Al-Buruj", banyakAyat: 22, juz: [30] },
  { namaSurah: "At-Tariq", banyakAyat: 17, juz: [30] },
  { namaSurah: "Al-A'la", banyakAyat: 19, juz: [30] },
  { namaSurah: "Al-Ghashiya", banyakAyat: 26, juz: [30] },
  { namaSurah: "Al-Fajr", banyakAyat: 30, juz: [30] },
  { namaSurah: "Al-Balad", banyakAyat: 20, juz: [30] },
  { namaSurah: "Ash-Shams", banyakAyat: 15, juz: [30] },
  { namaSurah: "Al-Lail", banyakAyat: 21, juz: [30] },
  { namaSurah: "Ad-Duhaa", banyakAyat: 11, juz: [30] },
  { namaSurah: "Ash-Sharh", banyakAyat: 8, juz: [30] },
  { namaSurah: "At-Tin", banyakAyat: 8, juz: [30] },
  { namaSurah: "Al-Alaq", banyakAyat: 19, juz: [30] },
  { namaSurah: "Al-Qadr", banyakAyat: 5, juz: [30] },
  { namaSurah: "Al-Bayyina", banyakAyat: 8, juz: [30] },
  { namaSurah: "Az-Zalzala", banyakAyat: 8, juz: [30] },
  { namaSurah: "Al-Adiyat", banyakAyat: 11, juz: [30] },
  { namaSurah: "Al-Qari'a", banyakAyat: 11, juz: [30] },
  { namaSurah: "At-Takathur", banyakAyat: 8, juz: [30] },
  { namaSurah: "Al-Asr", banyakAyat: 3, juz: [30] },
  { namaSurah: "Al-Humaza", banyakAyat: 9, juz: [30] },
  { namaSurah: "Al-Fil", banyakAyat: 5, juz: [30] },
  { namaSurah: "Quraysh", banyakAyat: 4, juz: [30] },
  { namaSurah: "Al-Ma'un", banyakAyat: 7, juz: [30] },
  { namaSurah: "Al-Kawthar", banyakAyat: 3, juz: [30] },
  { namaSurah: "Al-Kafirun", banyakAyat: 6, juz: [30] },
  { namaSurah: "An-Nasr", banyakAyat: 3, juz: [30] },
  { namaSurah: "Al-Lahab", banyakAyat: 5, juz: [30] },
  { namaSurah: "Al-Ikhlas", banyakAyat: 4, juz: [30] },
  { namaSurah: "Al-Falaq", banyakAyat: 5, juz: [30] },
  { namaSurah: "An-Nas", banyakAyat: 6, juz: [30] }
];



const phoneNumber = "083191319297";
const message = encodeURIComponent(
  "Assallamu'alaikum, saya tidak menemukan nama sekolah tempat saya bekerja pada list pendaftaran"
);
export const waLink = `https://wa.me/${phoneNumber}?text=${message}`;


export  const options = {
    // default is `save`
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.
    resolution: Resolution.HIGH,
    page: {
      // margin is in MM, default is Margin.NONE = 0
      // margin: Margin.SMALL,
      // default is 'A4'
      // default is 'portrait'
      orientation: "landscape",
    },
    // canvas: {
    //   // default is 'image/jpeg' for better size performance
    //   mimeType: "image/png",
    //   qualityRatio: 1,
    // },
    // // Customize any value passed to the jsPDF instance and html2canvas
    // // function. You probably will not need this and things can break,
    // // so use with caution.
    // overrides: {
    //   // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
    //   pdf: {
    //     compress: true,
    //   },
    //   // see https://html2canvas.hertzen.com/configuration for more options
    //   canvas: {
    //     useCORS: true,
    //   },
    // },
  };

