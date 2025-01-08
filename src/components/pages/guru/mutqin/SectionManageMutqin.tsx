"use client";

import LoadingBarSkeleton from "@/components/skeleton/LoadingBarSkeleton";
import Loader from "@/components/skeleton/LoadingBarSkeleton";
import { setStudentData } from "@/helper/zustand";
import { trpc } from "@/server/client";
import { initialJuzData } from "@/static";
import { Juz } from "@/types";
import React, { useState } from "react";
import { toast } from "sonner";

export function SectionManageMutqin() {
  const { student_id } = setStudentData();

  return (
    <div className="overflow-x-auto container px-4 mb-4">
      {student_id && <TableManageMutqin student_id={student_id} />}
    </div>
  );
}

function TableManageMutqin({ student_id }: { student_id: number }) {
  const { data, isLoading, refetch } = trpc.getStudent.useQuery(
    {
      student_id,
    },
    {
      enabled: !!student_id,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
  const { mutate: updateMutqinLevel } = trpc.updateMutqinLevel.useMutation({
    onSuccess: () => {
      refetch();
      toast.success("Berhasil Mengupdate Mutqin");
    },
    onMutate: () => {
      toast.info("Proses Mengupdate Mutqin");
    },
    onError: () => {
      toast.error("Gagal Mengupdate Mutqin");
    },
  });

  const [juzData] = useState<Juz[]>(initialJuzData);

  const handleUpdate = (id: number) => {
    updateMutqinLevel({
      student_id,
      status: id,
    });
  };

  if (isLoading) return <LoadingBarSkeleton className="scale-150 mx-auto" />;

  if (!data) return <h1>Terdapat Kesalahan</h1>;
  return (
    <table className="min-w-full bg-white rounded-md border border-customSecondary">
      <thead className="bg-customSecondary text-white">
        <tr>
          <th className="py-2 px-4 border-b border-r border-white text-left hidden lg:block
          ">
            No
          </th>
          <th className="py-2 px-4 border-b border-r border-white text-left">
            Nomor Juz
          </th>
          <th className="py-2 px-4 border-b border-r border-white text-left">
            Rentang Surah
          </th>
          <th className="py-2 px-4 border-b border-r border-white text-center">
            Status
          </th>
          <th className="py-2 px-4 border-b text-center">Opsi</th>
        </tr>
      </thead>
      <tbody>
        {juzData.map((juz) => (
          <tr
            key={juz.id}
            className="hover:bg-gray-50 border-b  border-customSecondary text-xs lg:text-sm "
          >
            <td className="py-2 px-4 border-r border-customSecondary hidden lg:block">
              {juz.id}
            </td>
            <td className="py-2 px-4 border-r border-customSecondary">
              Juz {juz.id}
            </td>
            <td className="py-2 px-4 border-r border-customSecondary">
              {juz.name}
            </td>
            <td className="py-2 px-4 border-r border-customSecondary text-center">
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold text-center md:text-left
                  ${
                    Number(juz.id) <= data.status + 1
                      ? Number(juz.id) == data.status + 1
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  } 
                  `}
              >
                {Number(juz.id) <= data.status + 1
                  ? Number(juz.id) != data.status + 1
                    ? "Selesai"
                    : "Sedang Menjalani"
                  : "Belum Selesai"}
              </span>
            </td>
            <td className="py-2 px-4 text-center">
              <button
                onClick={() => handleUpdate(juz.id)}
                className="hover:bg-customPrimary bg-customSecondary text-white font-bold py-1 px-2 text-sm rounded"
              >
                Update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
