import { QuizUpdateManyWithoutCategoriesInput } from "./QuizUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  quizzes?: QuizUpdateManyWithoutCategoriesInput;
};
