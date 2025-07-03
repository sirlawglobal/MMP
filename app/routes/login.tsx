//route/login.tsx

import { json, redirect, type ActionFunction, type LoaderFunction } from "@remix-run/node";
import { Form, useActionData, useLoaderData, useNavigation } from "@remix-run/react";
import { loginUser } from "~/utils/auth.server";
import { getSession, commitSession } from "~/utils/session.server";
import { FaEnvelope, FaLock } from "react-icons/fa";

type ActionData = {
  error?: string;
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request);
  const email = session.get("email");

  if (email) {
    // Already logged in → redirect
    return redirect("/dashboard");
  }

  return json({});
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await loginUser(email, password);

  if (!user) {
    return json<ActionData>({ error: "Invalid email or password" }, { status: 401 });
  }

  const session = await getSession(request);
  session.set("email", user.email);

  return redirect("/dashboard", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export default function LoginPage() {
  const actionData = useActionData<ActionData>();
  const transition = useNavigation(); // Track form submission state
  const isSubmitting = transition.state === "submitting"; // Check if form is submitting

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
              disabled={isSubmitting} // Disable input during submission
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
              disabled={isSubmitting} // Disable input during submission
            />
          </div>

          {actionData?.error && (
            <p className="text-red-500 text-sm text-center">{actionData.error}</p>
          )}

          <button
            type="submit"
            className={`w-full bg-blue-600 text-white py-2 rounded-md transition duration-300 flex items-center justify-center ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
            disabled={isSubmitting} // Disable button during submission
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </Form>

        <p className="text-center text-gray-500 mt-6 text-sm">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}