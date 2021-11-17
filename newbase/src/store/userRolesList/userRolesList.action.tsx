import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../firebase.config";

export const getUserRolesList: any = createAsyncThunk(
  "fetchGetUserRolesList",
  async () => {
    const userRef = collection(dataBase, "roles");
    const items = await getDocs(userRef);
    const response = items.docs.map((item) => {
      return item.data().rolesList;
    })[0];
    return response.json();
  }
);
