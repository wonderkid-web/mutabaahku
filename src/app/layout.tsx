import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import NextAuthWrapper from "@/components/wrapper/NextAuthWrapper";
import TrpcWrapper from "@/components/wrapper/TrpcWrapper";
import { Toaster } from "sonner";

const tajawal = Tajawal({
  style: "normal",
  weight: ["400"],
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "Aplikasi Mutabaah Tahfidz",
  description: "Simple & Modern PWA For Mutabaah",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    {
      name: "Muhammad Wahyu Ramadhan",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/android/android-launchericon-144-144.png",
    },
    { rel: "icon", url: "/android/android-launchericon-144-144.png" },
  ],
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
