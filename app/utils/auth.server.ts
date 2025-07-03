// app/utils/auth.server.ts
import { connectDB } from "./db.server";
import { User } from "~/models/User";
// import { Request } from '@remix-run/node';
// Add this to your existing auth.server.ts
import { redirect } from "@remix-run/node";
// Add to the top of auth.server.ts
import { getSession } from "./session.server"; // Make sure this path is correct

export type User = {
  id: string;
  email: string;
  role: string;
  name?: string;
  bio?: string;
  skills?: string[];
  goals?: string[];
};

export async function loginUser(email: string, password: string): Promise<User | null> {
  await connectDB();
  const user = await User.findOne({ email });
  return user ? formatUser(user) : null;
}

export async function registerUser(email: string, password: string, role: string): Promise<User | null> {
  await connectDB();
  const exists = await User.findOne({ email });
  if (exists) return null;

  const newUser = await User.create({
    email,
    password, // You can hash this later
    role,
    name: email.split("@")[0],
    bio: "",
    skills: [],
    goals: []
  });

  return formatUser(newUser);
}

export async function updateUserProfile(
  email: string,
  profileData: {
    name: string;
    bio: string;
    skills: string[];
    goals: string[];
  }
): Promise<User | null> {
  await connectDB();
  const updated = await User.findOneAndUpdate({ email }, profileData, { new: true });
  return updated ? formatUser(updated) : null;
}

export async function getUserRole(email: string): Promise<string> {
  await connectDB();
  const user = await User.findOne({ email });
  return user?.role || "mentee";
}

export async function getCurrentUser(email: string): Promise<User | null> {
  await connectDB();
  const user = await User.findOne({ email });
  return user ? formatUser(user) : null;
}

function formatUser(user: any): User {
  return {
    id: user._id.toString(),
    email: user.email,
    role: user.role,
    name: user.name,
    bio: user.bio,
    skills: user.skills,
    goals: user.goals,
  };
}



export async function requireAdmin(request: Request): Promise<User> {
  const session = await getSession(request);
  const email = session.get("email");
  
  if (!email) {
    throw redirect("/login");
  }

  const user = await getCurrentUser(email);
  if (!user) {
    throw redirect("/login");
  }

  if (user.role !== "admin") {
    throw redirect("/dashboard");
  }

  return user;
}
