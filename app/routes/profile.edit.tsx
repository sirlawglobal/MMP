import { json, redirect, type LoaderFunction, type ActionFunction } from "@remix-run/node";
import { Form, useLoaderData, useActionData } from "@remix-run/react";
import { getSession } from "~/utils/session.server";
import { getCurrentUser, updateUserProfile } from "~/utils/auth.server";
import type { User } from "~/utils/auth.server";

type LoaderData = {
  user: User;
};

type ActionData = {
  success?: boolean;
  error?: string;
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request);
  const email = session.get("email");

  if (!email) return redirect("/login");

  const user = await getCurrentUser(email);
  if (!user) return redirect("/login");

  return json<LoaderData>({ user });
};

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request);
  const email = session.get("email");

  if (!email) return redirect("/login");

  const formData = await request.formData();
  const name = formData.get("name") as string;
  const bio = formData.get("bio") as string;
  const skills = (formData.get("skills") as string).split(",").map(s => s.trim());
  const goals = (formData.get("goals") as string).split(",").map(g => g.trim());

  const updatedUser = await updateUserProfile(email, {
    name,
    bio,
    skills,
    goals
  });

  if (!updatedUser) {
    return json<ActionData>({ error: "Profile update failed." }, { status: 500 });
  }

  return json<ActionData>({ success: true });
};

export default function EditProfile() {
  const { user } = useLoaderData<LoaderData>();
  const actionData = useActionData<ActionData>();

  return (
    // <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
    <div className="bg-white p-6 rounded shadow max-w-2xl w-full">

      <h1 className="text-2xl font-bold mb-4 text-purple-800">Edit Profile</h1>

      <Form method="post" className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            name="name"
            defaultValue={user.name}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Bio</label>
          <textarea
            name="bio"
            defaultValue={user.bio}
            rows={3}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Skills (comma-separated)</label>
          <input
            name="skills"
            defaultValue={user.skills?.join(", ")}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Goals (comma-separated)</label>
          <input
            name="goals"
            defaultValue={user.goals?.join(", ")}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Save Changes
        </button>

        {actionData?.success && (
          <p className="text-green-600 text-sm mt-2 text-center">Profile updated successfully!</p>
        )}
        {actionData?.error && (
          <p className="text-red-600 text-sm mt-2 text-center">{actionData.error}</p>
        )}
      </Form>
    </div>
  );
}
