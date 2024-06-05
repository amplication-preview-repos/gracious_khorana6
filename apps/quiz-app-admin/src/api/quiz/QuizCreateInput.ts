import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { QuestionCreateNestedManyWithoutQuizzesInput } from "./QuestionCreateNestedManyWithoutQuizzesInput";

export type QuizCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  questions?: QuestionCreateNestedManyWithoutQuizzesInput;
  title?: string | null;
};
