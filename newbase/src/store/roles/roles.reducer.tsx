import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";
import { getRoles } from "./roles.actions";

const reducerName = "rolesReducer";

const rolesSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {},
  extraReducers: {
    [getRoles.pending]: (state) => {
      return {
        ...state,
        isRolesLoading: true,
      };
    },
    [getRoles.fulfilled]: (state, action) => {
      return {
        ...state,
        rolesList: action.payload,
        isRolesLoading: false,
      };
    },
    [getRoles.rejected]: (state) => {
      return {
        ...state,
        isRolesLoading: false,
      };
    },
  },
});

export default rolesSlice.reducer;
