import { createCookieSessionStorage } from "@remix-run/node";

// You should replace this with a real secret from your environment in production
const secret = process.env.SESSION_SECRET || "your-secret-key";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secrets: [secret],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
});

// Get session from the request
// export function getSession(request: Request) {
//   return sessionStorage.getSession(request.headers.get("Cookie"));
// }

export async function getSession(request: Request) {
  const cookieHeader = request?.headers?.get("Cookie") ?? "";
  return sessionStorage.getSession(cookieHeader);
}

// Destroy session for logout
export function destroySession(session: Awaited<ReturnType<typeof getSession>>) {
  return sessionStorage.destroySession(session);
}

// Commit session after changes (e.g., login)
export function commitSession(session: Awaited<ReturnType<typeof getSession>>) {
  return sessionStorage.commitSession(session);
}
