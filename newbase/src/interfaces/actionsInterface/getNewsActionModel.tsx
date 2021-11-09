import { NewsItem } from "../getNewsResponse/getNewsResponse";

export interface GetNewsActionModel {
  type: string;
  payload: NewsItem[];
}
