import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "@/app/globals.css";
import NextAuthWrapper from "@/components/wrapper/NextAuthWrapper";
import TrpcWrapper from "@/components/wrapper/TrpcWrapper";
import { Toaster } from "sonner";
const tajawal = Tajawal({
  style: "normal",
  weight: ["400"],
  subsets: ["arabic", "latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${tajawal.className} antialiased`}>
      <Toaster position="top-center" />
      <TrpcWrapper>
        <NextAuthWrapper>{children}</NextAuthWrapper>
      </TrpcWrapper>
    </div>
  );
}
