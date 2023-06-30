export type User = {
  name: string;
  username: string;
  image?: string;
  about?: string;
  gender?: "male" | "female" | "other";
  coverImage?: string;

  email?: string;
  authType: "github" | "google" | "facebook" | "email-password";
  githubUsername?: string;

  blogsCount: number;
  followingCount: number;
  followerCount: number;
};
