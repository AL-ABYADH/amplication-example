import { JsonValue } from "type-fest";

export type Document = {
  createdAt: Date;
  file: JsonValue;
  id: string;
  updatedAt: Date;
};
