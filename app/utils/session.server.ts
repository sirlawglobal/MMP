
// app/utils/session.server.ts

import { createCookieSessionStorage } from "@remix-run/node";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secrets: [process.env.SESSION_SECRET || "s3cr3t"], // Fallback secret for development
    secure: process.env.NODE_ENV === "production", // Secure cookies in production
    httpOnly: true, // Prevent client-side access to cookies
    maxAge: 60 * 60 * 24 * 7, // 1 week expiration
    sameSite: "lax", // CSRF protection
    path: "/", // Cookie available across all routes
  },
});

export async function getSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

export async function commitSession(session: any) {
  return sessionStorage.commitSession(session);
}

export async function destroySession(session: any) {
  return sessionStorage.destroySession(session);
}