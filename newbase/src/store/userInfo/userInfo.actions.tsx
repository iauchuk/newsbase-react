import { createAsyncThunk } from "@reduxjs/toolkit";
import { UsersInfoInterface } from "../../interfaces/usersInfoInterface/usersInfoInterface";

export const getUsersInfo: any = createAsyncThunk(
  "fetchGetUsersInfo",
  async (userInfo: UsersInfoInterface[]) => {
    const response = await JSON.parse(
      localStorage.getItem("userInfoList") as string
    );
    return response;
  }
);

export const changeUsersInfo: any = createAsyncThunk(
  "fetchChangeUsersInfo",
  async (userInfo: UsersInfoInterface) => {
    await localStorage.setItem("userInfoList", JSON.stringify(userInfo));
    return;
  }
);
