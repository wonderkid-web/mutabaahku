import { auth } from "../../auth";
import ArabicText from "@/components/text/ArabicText";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <ArabicText text="بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم" />
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <h1 className="--">Hallo Dunia</h1>
    </div>
  );
}
