import { NewsItem } from "../getNewsResponse/getNewsResponse";
import { UsersInfoInterface } from "../usersInfoInterface/usersInfoInterface";

interface usersReducerInterface {
  usersList: UsersInfoInterface[];
  isUsersLoading?: boolean;
  isUsersChanging?: boolean;
  isUsersAdding?: boolean;
  isUserDeleting?: boolean;
}

interface newsReducerInterface {
  newsList: NewsItem[];
  isNewsLoading?: boolean;
}

interface rolesReducerInterface {
  rolesList: any;
  isRolesLoading?: boolean;
}

interface newsReducerInterface {
  userRolesList: NewsItem[];
  isUserRolesListLoading?: boolean;
}

export interface StoreStateInterface {
  news?: newsReducerInterface;
  users?: usersReducerInterface;
  roles?: rolesReducerInterface;
}
