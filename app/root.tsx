// app/root.tsx
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import tailwindStyles from "./tailwind.css"; // ✅ correct path to your source CSS file

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
  // optionally add fonts here
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
