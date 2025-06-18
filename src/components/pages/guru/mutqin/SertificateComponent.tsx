"use client";

import { formatedTodayDate } from "@/helper";
import { options } from "@/static";
import React, { useRef } from "react";
import generatePDF from "react-to-pdf";

function SertificateComponent({ name, juz }: { name: string; juz: string }) {
  const sertiRef = useRef(null);
  return (
    <>
      <div
        ref={sertiRef}
        id="certificate"
        className="w-[1122px] h-[794px] mx-auto relative bg-white border-8 border-customPrimary p-10 text-center font-serif overflow-hidden"
      >
        {/* Background image sebagai elemen absolute */}
        <img
          src="/al-quran.jpg"
          alt="background"
          crossOrigin="anonymous"
          className="absolute inset-0 w-full h-full object-cover opacity-20 blur-[2px] pointer-events-none z-0"
        />

        {/* Konten di atas background */}
        <div className="absolute top-10 left-10 right-10 z-10">
          <img
            src={"/basmallah.png"}
            alt="logo google"
            crossOrigin="anonymous"
            className="object-cover w-48 h-20 mx-auto relative rounded-full overflow-hidden"
          />
          <h2 className="text-2xl font-semibold text-gray-800">
            SERTIFIKAT PENGHARGAAN
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang,
            sertifikat ini diberikan kepada:
          </p>

          <h2 className="mt-6 text-3xl font-bold text-green-700 underline decoration-dotted uppercase">
            {name}
          </h2>

          <p className="mt-4 text-lg text-gray-800">
            Atas pencapaiannya dalam menghafal {"Al-Qur'an"} sebanyak:
          </p>

          <h3 className="mt-3 text-2xl font-semibold text-green-800">
            Juz {juz}
          </h3>

          <p className="mt-6 text-gray-600 italic">
            Semoga Allah senantiasa memberkahi dan menjadikannya bagian dari
            keluarga-Nya yang istimewa, para penjaga {"Al-Qur'an"}.
          </p>

          <div className="flex justify-between mt-12 px-10 text-sm text-gray-700">
            <div className="text-center">
              <p>Medan, {formatedTodayDate()}</p>
              <p className="mt-12 font-semibold underline">Zulham Khoir</p>
              <p>Pembina</p>
            </div>
            <div className="text-center">
              <p>&nbsp;</p>
              <p className="mt-12 font-semibold underline">Ridho Alfarizi</p>
              <p>Kepala Sekolah</p>
            </div>
          </div>
        </div>
      </div>

      <button
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded fixed bottom-4 left-1/2 -translate-x-1/2"
        // @ts-ignore
        onClick={() => generatePDF(sertiRef, options)}
      >
        DOWNLOAD
      </button>
    </>
  );
}

export default SertificateComponent;
