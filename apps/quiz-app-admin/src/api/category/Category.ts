import { Quiz } from "../quiz/Quiz";

export type Category = {
  createdAt: Date;
  id: string;
  name: string | null;
  quizzes?: Array<Quiz>;
  updatedAt: Date;
};
