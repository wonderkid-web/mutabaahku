"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import google from "@/../public/google.svg";
import logo from "@/../public/1.png";
import { useState } from "react";
import LoadingBarSkeleton from "@/components/skeleton/LoadingBarSkeleton";

function Signin() {
  const [loading, setLoading] = useState(false);
  const handleSignin = async () => {
    setLoading(true);
    await signIn("google", { redirectTo: "/guru/hafalan" });
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="size-48 lg:size-80 relative rounded-full overflow-hidden">
          <Image src={logo} alt="logo google" objectFit="cover" fill />
        </div>
        <button
          disabled={loading}
          className={`text-lg lg:text-xl px-4 py-2 rounded-sm border border-customSecondary flex justify-between gap-4 items-center text-customSecondary font-semibold shadow-md focus:bg-none mb-2 transition ${
            loading ? "bg-gray-100" : "bg-white"
          }`}
          onClick={() => handleSignin()}
        >
          Masuk dengan Akun google{" "}
          <div className="size-6 relative">
            <Image src={google} alt="logo google" objectFit="cover" fill />
          </div>
        </button>
        {loading && (
          <div className="flex flex-col gap-2">
            <p>Memproses Masuk...</p>
            <LoadingBarSkeleton />
          </div>
        )}
      </div>
    </div>
  );
}

export default Signin;
