import { createAsyncThunk } from "@reduxjs/toolkit";
import { default_api_url } from "../../constants/appConsts";
import { GetNewsActionModel } from "../../interfaces/actionsInterface/getNewsActionModel";

export const getNewsAction: any = createAsyncThunk(
  "fetchGetNews",
  async (news: GetNewsActionModel) => {
    const response = await fetch(default_api_url);
    return response.json();
  }
);
