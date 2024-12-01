"use client";

import { signOut, useSession } from "next-auth/react";
import React from "react";

function page() {
  const session = useSession()

  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <button onClick={async () => await signOut()}>keluar</button>
    </div>
  );
}

export default page;
