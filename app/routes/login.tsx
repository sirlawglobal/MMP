import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { loginUser } from "~/utils/auth.server";
import { getSession, sessionStorage } from "~/utils/session.server";
import { FaEnvelope, FaLock } from "react-icons/fa";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await loginUser(email, password);
  if (!user) {
    return json({ error: "Invalid credentials" }, { status: 401 });
  }

  const session = await getSession(request);
  session.set("email", user.email);

  return redirect("/dashboard", {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

export default function LoginPage() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 animate-fade-in-down">
        <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-6">Welcome Back</h1>
        <p className="text-sm text-center text-gray-500 mb-6">Please login to your account</p>
        
        <Form method="post" className="space-y-5">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-3.5 text-gray-400" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {actionData?.error && (
            <p className="text-red-500 text-sm text-center">{actionData.error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300"
          >
            Login
          </button>
        </Form>

        <p className="text-center text-gray-500 mt-6 text-sm">
          Don’t have an account? <a href="/register" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
