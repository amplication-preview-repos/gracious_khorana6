import { Category } from "../category/Category";
import { Question } from "../question/Question";

export type Quiz = {
  category?: Category | null;
  createdAt: Date;
  id: string;
  questions?: Array<Question>;
  title: string | null;
  updatedAt: Date;
};
