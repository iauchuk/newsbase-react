import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";
import { getNews } from "./news.action";

const reducerName = "newsReducer";

const newsSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: {
    [getNews.pending]: (state) => {
      return {
        ...state,
        isNewsLoading: true,
      };
    },
    [getNews.fulfilled]: (state, action) => {
      return {
        ...state,
        newsList: action.payload.items,
        isNewsLoading: false,
      };
    },
    [getNews.rejected]: (state) => {
      return {
        ...state,
        isNewsLoading: false,
      };
    },
  },
});

export default newsSlice.reducer;
