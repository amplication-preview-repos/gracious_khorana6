import { SortOrder } from "../../util/SortOrder";

export type UploadOrderByInput = {
  createdAt?: SortOrder;
  file?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
