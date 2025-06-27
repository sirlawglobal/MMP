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
    <div className="flex justify-center">
  <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
    <h1 className="text-3xl font-bold text-purple-800 mb-8 text-center">Edit Profile</h1>

    <Form method="post" className="space-y-6">
      {/* Name */}
      <div className="relative">
        <input
          name="name"
          defaultValue={user.name}
          required
          className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600 transition"
          placeholder="Name"
        />
        <label className="absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-purple-600">
          Name
        </label>
      </div>

      {/* Bio */}
      <div className="relative">
        <textarea
          name="bio"
          rows={3}
          defaultValue={user.bio}
          placeholder="Bio"
          className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600 transition resize-none"
        />
        <label className="absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-purple-600">
          Bio
        </label>
      </div>

      {/* Skills */}
      <div className="relative">
        <input
          name="skills"
          defaultValue={user.skills?.join(", ")}
          placeholder="e.g. React, Node.js, MongoDB"
          className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600 transition"
        />
        <label className="absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-purple-600">
          Skills (comma-separated)
        </label>
      </div>

      {/* Goals */}
      <div className="relative">
        <input
          name="goals"
          defaultValue={user.goals?.join(", ")}
          placeholder="e.g. Learn TypeScript, Improve UI Design"
          className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600 transition"
        />
        <label className="absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-purple-600">
          Goals (comma-separated)
        </label>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-md transition"
      >
        Save Changes
      </button>

      {/* Alerts */}
      {actionData?.success && (
        <p className="text-green-600 text-sm text-center">Profile updated successfully!</p>
      )}
      {actionData?.error && (
        <p className="text-red-600 text-sm text-center">{actionData.error}</p>
      )}
    </Form>
  </div>
</div>
  );
}
