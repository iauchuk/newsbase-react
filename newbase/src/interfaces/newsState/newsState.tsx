import { NewsItem } from "../getNewsResponse/getNewsResponse";

export interface NewsState {
  isNewsLoading: boolean;
  news: NewsItem[];
}
