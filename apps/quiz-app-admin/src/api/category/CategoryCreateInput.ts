import { QuizCreateNestedManyWithoutCategoriesInput } from "./QuizCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  quizzes?: QuizCreateNestedManyWithoutCategoriesInput;
};
