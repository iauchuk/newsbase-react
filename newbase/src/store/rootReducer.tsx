import { combineReducers } from "redux";
import userInfoReducer from "./userInfo/userInfo.reducer";
import newsReducer from "./news/news.reducer";
import rolesReducer from "./roles/roles.reducer";

export const rootReducer = combineReducers({
  users: userInfoReducer,
  news: newsReducer,
  roles: rolesReducer,
});
