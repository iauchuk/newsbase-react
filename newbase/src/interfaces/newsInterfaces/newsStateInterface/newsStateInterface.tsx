import { NewsItem } from "../../getNewsResponse/getNewsResponse";

export interface NewsStateInterface {
  isNewsLoading: boolean;
  newsList: NewsItem[];
}
