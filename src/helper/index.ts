import { format } from "date-fns";
import { id } from "date-fns/locale";
import localFont from "next/font/local";

export const quranFont = localFont({
  src: "../app/fonts/Quran.otf",
  weight: "500",
});


export const formatedDate = (date:Date) =>  format(date, "dd MMMM yyyy, HH:mm", {locale:id})