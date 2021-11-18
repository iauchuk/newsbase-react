import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";
import {addUserInfo, changeUsersInfo, deleteUserInfo, getUsersInfo} from "./userInfo.actions";

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
    [changeUsersInfo.fulfilled]: (state) => {
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
    [addUserInfo.pending]: (state) => {
      return {
        ...state,
        isUserInfoAdding: true,
      };
    },
    [addUserInfo.fulfilled]: (state) => {
      return {
        ...state,
        isUserInfoAdding: false,
      };
    },
    [addUserInfo.rejected]: (state) => {
      return {
        ...state,
        isUserInfoAdding: false,
      };
    },
    [deleteUserInfo.pending]: (state) => {
      return {
        ...state,
        isUserDeleting: true,
      };
    },
    [deleteUserInfo.fulfilled]: (state) => {
      return {
        ...state,
        isUserDeleting: false,
      };
    },
    [deleteUserInfo.rejected]: (state) => {
      return {
        ...state,
        isUserDeleting: false,
      };
    },
  },
});

export default userInfoSlice.reducer;
