"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import google from "@/../public/google.svg";
import logo from "@/../public/1.png";

function Signin() {
  const handleSignin = async () => {
    const res = await signIn("google", { redirectTo: "/guru/hafalan" });
    console.log(res);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="size-48 lg:size-80 relative rounded-full overflow-hidden">
          <Image src={logo} alt="logo google" objectFit="cover" fill />
        </div>
        <button
          className="text-lg lg:text-xl px-4 py-2 rounded-sm border border-customSecondary flex justify-between gap-4 items-center text-customSecondary font-semibold shadow-md focus:bg-none"
          onClick={() => handleSignin()}
        >
          Masuk dengan Akun google{" "}
          <div className="size-6 relative">
            <Image src={google} alt="logo google" objectFit="cover" fill />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Signin;
