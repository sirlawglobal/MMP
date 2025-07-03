// routes/logout.tsx

import { redirect, type LoaderFunction } from "@remix-run/node";
import { getSession, destroySession } from "~/utils/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request);

  return redirect("/login", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};
