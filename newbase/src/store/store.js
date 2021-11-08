import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./reducers/reducer";

export const reducerName = "newsReducer";

const store = configureStore({
  reducer: newsReducer,
});

export default store;
