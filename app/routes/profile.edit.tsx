// app/routes/profile.edit.tsx
import { ActionFunction, json, LoaderFunction, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { getSession } from "~/utils/session.server";
import { getCurrentUser, updateUserProfile } from "~/utils/auth.server";

const skillsOptions = [
  "Marketing",
  "UI/UX",
  "Product Design",
  "Software Development",
  "Business Strategy",
  "Finance",
  "Leadership"
];

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request);
  const email = session.get("email");

  if (!email) return redirect("/login");

  const user = await getCurrentUser(email);
  if (!user) return redirect("/login");

  return json({ user });
};

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request);
  const email = session.get("email");

  if (!email) return redirect("/login");

  const formData = await request.formData();
  const profileData = {
    name: formData.get("name") as string,
    bio: formData.get("bio") as string,
    skills: formData.getAll("skills") as string[],
    goals: (formData.get("goals") as string).split(",").map(g => g.trim()),
  };

  await updateUserProfile(email, profileData);
  return redirect("/dashboard");
};

export default function EditProfile() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - similar to dashboard */}
      <aside className="w-60 bg-purple-700 text-white flex flex-col p-4">
        {/* ... same sidebar as dashboard ... */}
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <h1 className="text-xl font-semibold mb-6 text-purple-800">EDIT PROFILE</h1>
        
        <Form method="post" className="bg-white rounded-lg p-6 shadow">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={user.name}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="bio">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              defaultValue={user.bio}
              className="w-full p-2 border rounded"
              rows={3}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Skills
            </label>
            <div className="grid grid-cols-2 gap-2">
              {skillsOptions.map(skill => (
                <div key={skill} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`skill-${skill}`}
                    name="skills"
                    value={skill}
                    defaultChecked={user.skills?.includes(skill)}
                    className="mr-2"
                  />
                  <label htmlFor={`skill-${skill}`}>{skill}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="goals">
              Goals (comma separated)
            </label>
            <textarea
              id="goals"
              name="goals"
              defaultValue={user.goals?.join(", ")}
              className="w-full p-2 border rounded"
              rows={2}
              required
            />
            <p className="text-sm text-gray-500 mt-1">Example: Improve product design skills, Learn marketing strategies</p>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Save Profile
            </button>
          </div>
        </Form>
      </main>
    </div>
  );
}