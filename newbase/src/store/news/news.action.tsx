import { createAsyncThunk } from "@reduxjs/toolkit";
import { default_api_url } from "../../constants/appConsts";

export const getNews: any = createAsyncThunk("fetchGetNews", async () => {
  const response = await fetch(default_api_url);
  return response.json();
});
