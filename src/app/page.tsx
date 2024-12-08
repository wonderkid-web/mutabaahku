import Link from "next/link";
import { auth } from "../../auth";
import ArabicText from "@/components/text/ArabicText";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen">
      <ArabicText text="بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم" />
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <h1 className="--">Hallo Dunia</h1>

      <Link 
      className="mt-8 ml-4 inline-block py-2 rounded-md bg-customPrimary text-white px-8 font-bold"
        href={'/teacher/hafalan'}
      >Dashboard Guru</Link>
    </div>
  );
}
