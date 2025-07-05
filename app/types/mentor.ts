// app/types/mentor.ts
export type MentorType = {
  _id: string;
  name: string;
  bio: string;
  role: string;
  skills?: string[];
  availability?: {
    [key: string]: {
      enabled: boolean;
      startTime?: string;
      endTime?: string;
    };
  };
};