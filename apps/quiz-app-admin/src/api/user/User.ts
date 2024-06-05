import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  quizHistory: JsonValue;
  roles: JsonValue;
  score: number | null;
  updatedAt: Date;
  username: string;
};
