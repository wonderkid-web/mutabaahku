import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PhoneCallIcon } from "lucide-react";

import { waLink } from "@/static";
import SchoolOriginForm from "./SchoolOriginForm";

export function SchoolOrigin() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Daftar Asal Sekolah</CardTitle>
        <CardDescription>
          Guru wajib memilih asal sekolah yang benar dan tunggu proses
          verifikasi akun dari operator.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SchoolOriginForm />
      </CardContent>
      <CardFooter className="flex flex-col text-gray-600">
        <p className="text-pretty">Tidak menemukan list sekolah anda?</p>
        <p className="flex gap-2 items-center text-pretty">
          Hubungi operator
          <Link
            href={waLink}
            className="size-6 flex justify-center items-center bg-customSecondary rounded-sm "
          >
            <PhoneCallIcon size={15} color="white" />
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
