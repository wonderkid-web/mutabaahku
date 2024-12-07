import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import NextAuthWrapper from "@/components/wrapper/NextAuthWrapper";
import TrpcWrapper from "@/components/wrapper/TrpcWrapper";
import {Toaster} from "sonner"
const tajawal = Tajawal({
  style: "normal",
  weight: ["400"],
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "Mutaba'ahku",
  description: "Mudahkan Hafalanmu dengan Mutaba'ahku",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tajawal.className} antialiased`}>
        <Toaster position="top-center" />
        <TrpcWrapper>
          <NextAuthWrapper>{children}</NextAuthWrapper>
        </TrpcWrapper>
      </body>
    </html>
  );
}
