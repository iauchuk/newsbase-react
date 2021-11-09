import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";
import { getNewsAction } from "../actions/actions";

export const reducerName = "newsReducer";

const newsSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: {
    [getNewsAction.pending]: (state) => {
      return {
        ...state,
        isNewsLoading: true,
      };
    },
    [getNewsAction.fulfilled]: (state, action) => {
      return {
        ...state,
        news: action.payload.items,
        isNewsLoading: false,
      };
    },
    [getNewsAction.rejected]: (state) => {
      return {
        ...state,
        isNewsLoading: false,
      };
    },
  },
});

export default newsSlice.reducer;
