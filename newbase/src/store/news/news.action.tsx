import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetNewsActionInterface } from "../../interfaces/actionsInterface/getNewsActionInterface";
import { default_api_url } from "../../constants/appConsts";

export const getNews: any = createAsyncThunk(
  "fetchGetNews",
  async (news: GetNewsActionInterface) => {
    const response = await fetch(default_api_url);
    return response.json();
  }
);
