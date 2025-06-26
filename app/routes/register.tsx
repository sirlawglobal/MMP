// app/routes/register.tsx
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { registerUser } from "~/utils/auth.server";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;

  if (!email || !password || !role) {
    return json({ error: "All fields are required" }, { status: 400 });
  }

  const user = await registerUser(email, password, role);
  if (!user) {
    return json({ error: "User already exists or registration failed" }, { status: 400 });
  }

  return redirect("/login");
}

export default function RegisterPage() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <Form method="post" className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <select
              name="role"
              required
              className="w-full px-4 py-2 border rounded bg-white focus:outline-none focus:ring focus:border-blue-400"
            >
              <option value="">Select role</option>
              <option value="mentee">Mentee</option>
              <option value="mentor">Mentor</option>
            </select>
          </div>

          {actionData?.error && (
            <p className="text-red-500 text-sm">{actionData.error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </Form>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
