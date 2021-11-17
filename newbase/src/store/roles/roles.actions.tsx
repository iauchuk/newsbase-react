import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../firebase.config";

const userRef = collection(dataBase, "roles");

export const getRoles: any = createAsyncThunk(
  "admin/fetchGetNewsFast",
  async () => {
    const items = await getDocs(userRef);
    const response = items.docs.map((item) => {
      return {
        ...item.data(),
      };
    })[0]?.rolesList;
    return response;
  }
);
