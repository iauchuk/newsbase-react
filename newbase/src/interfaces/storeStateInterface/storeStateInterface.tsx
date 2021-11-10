import { NewsItem } from "../getNewsResponse/getNewsResponse";
import { UsersInfoInterface } from "../usersInfoInterface/usersInfoInterface";

export interface StoreStateInterface {
  news?: NewsItem[];
  users?: UsersInfoInterface[];
  isUsersLoading?: boolean;
  isNewsLoading?: boolean;
  isUsersChanging?: boolean;
}
