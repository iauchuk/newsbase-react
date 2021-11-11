import { NewsItem } from "../getNewsResponse/getNewsResponse";
import { UsersInfoInterface } from "../usersInfoInterface/usersInfoInterface";

interface usersReducerInterface {
  usersList: UsersInfoInterface[];
  isUsersLoading?: boolean;
  isUsersChanging?: boolean;
}

interface newsReducerInterface {
  newsList: NewsItem[];
  isNewsLoading?: boolean;
}

export interface StoreStateInterface {
  news?: newsReducerInterface;
  users?: usersReducerInterface;
}
