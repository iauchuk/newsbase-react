import { NewsItem } from "../getNewsResponse/getNewsResponse";
import { NewsColumnConfigInterface } from "./newsColumnConfigInterface";

export interface NewsTablePropsInterface {
  rows: NewsItem[];
  columns: NewsColumnConfigInterface[];
}
