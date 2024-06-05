import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  quizHistory?: InputJsonValue;
  roles?: InputJsonValue;
  score?: number | null;
  username?: string;
};
