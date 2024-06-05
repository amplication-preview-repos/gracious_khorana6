import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { QuestionUpdateManyWithoutQuizzesInput } from "./QuestionUpdateManyWithoutQuizzesInput";

export type QuizUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  questions?: QuestionUpdateManyWithoutQuizzesInput;
  title?: string | null;
};
