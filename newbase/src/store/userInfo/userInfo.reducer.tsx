import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";
import { changeUsersInfo, getUsersInfo } from "./userInfo.actions";

export const reducerName = "userInfoReducer";

const userInfoSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: {
    [getUsersInfo.pending]: (state) => {
      return {
        ...state,
        isUsersLoading: true,
      };
    },
    [getUsersInfo.fulfilled]: (state, action) => {
      return {
        ...state,
        usersList: action.payload,
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

export default userInfoSlice.reducer;
