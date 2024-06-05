import { JsonValue } from "type-fest";

export type Upload = {
  createdAt: Date;
  file: JsonValue;
  id: string;
  updatedAt: Date;
};
