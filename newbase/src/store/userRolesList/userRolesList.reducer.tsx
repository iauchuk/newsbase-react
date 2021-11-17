import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";
import { getUserRolesList } from "./userRolesList.action";
const reducerName = "userRolesListReducer";

const userRolesListSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: {
    [getUserRolesList.pending]: (state) => {
      return {
        ...state,
        isUserRolesListLoading: true,
      };
    },
    [getUserRolesList.fulfilled]: (state, action) => {
      return {
        ...state,
        userRolesList: action.payload,
        isUserRolesListLoading: false,
      };
    },
    [getUserRolesList.rejected]: (state) => {
      return {
        ...state,
        isUserRolesListLoading: false,
      };
    },
  },
});

export default userRolesListSlice.reducer;
