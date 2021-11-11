import { combineReducers } from "redux";
import userInfoReducer from "./userInfo/userInfo.reducer";
import newsReducer from "./news/news.reducer";

export const rootReducer = combineReducers({
  users: userInfoReducer,
  news: newsReducer,
});
