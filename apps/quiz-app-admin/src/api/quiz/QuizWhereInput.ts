import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type QuizWhereInput = {
  category?: CategoryWhereUniqueInput;
  id?: StringFilter;
  questions?: QuestionListRelationFilter;
  title?: StringNullableFilter;
};
