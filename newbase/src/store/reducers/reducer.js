import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";
import {
  changeUsersInfo,
  getNewsAction,
  getUsersInfo,
} from "../actions/actions";

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
    [getUsersInfo.pending]: (state) => {
      return {
        ...state,
        isUsersLoading: true,
      };
    },
    [getUsersInfo.fulfilled]: (state, action) => {
      return {
        ...state,
        users: action.payload,
        isUsersLoading: false,
      };
    },
    [getUsersInfo.rejected]: (state) => {
      return {
        ...state,
        isUsersLoading: false,
      };
    },
    [changeUsersInfo.pending]: (state) => {
      return {
        ...state,
        isUsersChanging: true,
      };
    },
    [changeUsersInfo.fulfilled]: (state, action) => {
      return {
        ...state,
        isUsersChanging: false,
      };
    },
    [changeUsersInfo.rejected]: (state) => {
      return {
        ...state,
        isUsersChanging: false,
      };
    },
  },
});

export default newsSlice.reducer;
