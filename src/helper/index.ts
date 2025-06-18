import { format } from "date-fns";
import { id } from "date-fns/locale";
import localFont from "next/font/local";
import * as XLSX from "xlsx";

export const quranFont = localFont({
  src: "../app/fonts/Quran.otf",
  weight: "500",
});

export const formatedDate = (date: Date) =>
  format(date, "dd MMMM yyyy, HH:mm", { locale: id });

export const formatedTodayDate = () =>
  format(new Date(), "dd MMMM yyyy, HH:mm", { locale: id });

export const exportTableToExcel = (
  type: "Muroj'ah" | "Murid" | "Mutqin",
  tableRef: HTMLTableElement
) => {
  const wb = XLSX.utils.table_to_book(tableRef);
  XLSX.writeFileXLSX(wb, `${type}.xlsx`);
};

export function getMonthName(month: number): string {
  const months: string[] = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  
  // Pastikan bulan valid (1-12)
  if (month < 1 || month > 12) {
    throw new Error("Bulan harus antara 1 dan 12");
  }

  return months[month - 1]; // Indeks array dimulai dari 0, jadi kita kurangi 1 dari bulan
}

// Contoh penggunaan:
console.log(getMonthName(1));  // "Januari"
console.log(getMonthName(6));  // "Juni"
console.log(getMonthName(12)); // "Desember"


const exportToExcel = (data: any, fileName = "data") => {
  //   if (!Array.isArray(data) || data.length === 0) {
  //     console.error("Data tidak valid atau kosong");
  //     return;
  //   }
  //   // Ambil keys dari object pertama sebagai header kolom
  //   const headers = Object.keys(data[0]);
  //   // Konversi data menjadi format yang bisa dibaca XLSX
  //   const formattedData = data.map((item) => {
  //     const row: any = {};
  //     headers.forEach((key) => {
  //       // Konversi objek nested menjadi string jika perlu
  //       row[key] = typeof item[key] === "object" ? JSON.stringify(item[key]) : item[key];
  //     });
  //     return row;
  //   });
  //   const ws = XLSX.utils.json_to_sheet(formattedData);
  //   const wb = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  //   const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  //   const dataBlob = new Blob([excelBuffer], {
  //     type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  //   });
  //   saveAs(dataBlob, `${fileName}.xlsx`);
  // };
};

export default exportToExcel;
