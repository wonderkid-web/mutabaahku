"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { SchoolOrigin } from "@/components/pages/auth/SchoolOrigin";
import logo from "@/../public/1.png";
import Image from "next/image";

function Signup() {
  const [status, setStatus] = useState(false);

  const { handleSubmit, register } = useForm<{ role: string }>({
    defaultValues: {
      role: "",
    },
  });

  const onSubmit = async ({ role }: { role: string }) => {
    if (role == "kotoschool") setStatus(true);
  };

  if (!status)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <div className="size-48 lg:size-80 relative rounded-full overflow-hidden">
            <Image src={logo} alt="logo google" objectFit="cover" fill />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-lg lg:text-xl px-4 pr-2 py-2 rounded-sm border border-customSecondary flex justify-between gap-4 items-center text-customSecondary font-semibold shadow-md"
          >
            <input placeholder="kode masuk" {...register("role")} type="text" className="outline-none border-none focus:bg-none" />
            <button className="text-sm border-none outline-none bg-customPrimary text-white rounded-sm px-2 py-1" type="submit">submit</button>
          </form>
        </div>
      </div>
    );

  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <SchoolOrigin />
    </div>
  );
}

export default Signup;
