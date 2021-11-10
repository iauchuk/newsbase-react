import { NewsItem } from "../getNewsResponse/getNewsResponse";

export interface GetNewsActionInterface {
  type: string;
  payload: NewsItem[];
}
