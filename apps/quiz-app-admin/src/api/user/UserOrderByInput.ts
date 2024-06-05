import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  quizHistory?: SortOrder;
  roles?: SortOrder;
  score?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
