import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type UploadWhereInput = {
  file?: JsonFilter;
  id?: StringFilter;
};
