import { createAsyncThunk } from "@reduxjs/toolkit";
import { default_api_url } from "../../constants/appConsts";
import { GetNewsActionInterface } from "../../interfaces/actionsInterface/getNewsActionInterface";
import { UsersInfoInterface } from "../../interfaces/usersInfoInterface/usersInfoInterface";

export const getNewsAction: any = createAsyncThunk(
  "fetchGetNews",
  async (news: GetNewsActionInterface) => {
    const response = await fetch(default_api_url);
    return response.json();
  }
);

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
