import { auth } from "../../auth";

export default async function Home() {
  const session = await auth()

  return (
    <div>
      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>
        <h1>Hallo Dunia</h1>

    </div>
  );
}
