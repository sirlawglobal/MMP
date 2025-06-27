// app/root.tsx
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import tailwindStyles from "./tailwind.css";
import { Layout } from "./components/Layout";
import { getSession } from "./utils/session.server";
import { getUserRole, getCurrentUser } from "./utils/auth.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
  // optionally add fonts here
];

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request);
  const email = session.get("email");

  if (!email) return { user: null, role: null };

  const role = await getUserRole(email);
  const user = await getCurrentUser(email);
  return { user, role };
};

export default function App() {
  const { user, role } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout user={user} role={role}>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}