import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type DocumentWhereInput = {
  file?: JsonFilter;
  id?: StringFilter;
};
