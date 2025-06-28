// app/utils/auth.server.ts

export type User = { 
  id: string; 
  email: string; 
  role: string; 
  name?: string; 
  bio?: string; 
  skills?: string[]; 
  goals?: string[] 
};

const fakeUsers: User[] = [
  { 
    id: "1", 
    email: "admin@gmail.com", 
    role: "admin",
    name: "Admin User",
    bio: "Platform administrator",
    skills: ["Management", "Coordination"],
    goals: []
  },
  { 
    id: "2", 
    email: "mentor@gmail.com", 
    role: "mentor",
    name: "Mentor User",
    bio: "Experienced professional in UI/UX design",
    skills: ["UI/UX", "Product Design"],
    goals: []
  },
  { 
    id: "3", 
    email: "mentee@gmail.com", 
    role: "mentee",
    name: "Mentee User",
    bio: "Aspiring product designer",
    skills: ["Figma", "Wireframing"],
    goals: ["Improve product design skills"]
  },
];


export async function updateUserProfile(
  email: string,
  profileData: {
    name: string;
    bio: string;
    skills: string[];
    goals: string[];
  }
): Promise<User | null> {
  const userIndex = fakeUsers.findIndex(u => u.email === email);
  if (userIndex === -1) return null;

  fakeUsers[userIndex] = {
    ...fakeUsers[userIndex],
    ...profileData
  };

  return fakeUsers[userIndex];
}

export async function loginUser(email: string, password: string): Promise<User | null> {
  return fakeUsers.find((u) => u.email === email) || null;
}

export async function registerUser(email: string, password: string, role: string): Promise<User | null> {
  const exists = fakeUsers.find((user) => user.email === email);
  if (exists) return null;

  const newUser = { 
    id: Date.now().toString(), 
    email, 
    role,
    name: email.split('@')[0],
    bio: "",
    skills: [],
    goals: []
  };
  fakeUsers.push(newUser);
  return newUser;
}

export function getUserRole(email: string): string {
  const user = fakeUsers.find(u => u.email === email);
  return user?.role || "mentee";
}

export function getCurrentUser(email: string): User | null {
  const user = fakeUsers.find(u => u.email === email);
  return user || null;
}