import { createAsyncThunk } from "@reduxjs/toolkit";
import { UsersInfoInterface } from "../../interfaces/usersInfoInterface/usersInfoInterface";
import {
  collection,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
  getDocs,
} from "firebase/firestore";
import { dataBase } from "../../firebase.config";

const userRef = collection(dataBase, "users");

export const getUsersInfo: any = createAsyncThunk(
  "fetchGetUsersInfo",
  async () => {
    const items = await getDocs(userRef);
    const response = items.docs.map((item) => {
      return {
        ...item.data(),
        id: item.id,
      };
    });
    return response;
  }
);

export const changeUsersInfo: any = createAsyncThunk(
  "fetchChangeUsersInfo",
  async (userInfo: UsersInfoInterface) => {
    const userDoc = doc(dataBase, "users", userInfo.id);
    await updateDoc(userDoc, userInfo);
    return;
  }
);

export const deleteUserInfo: any = createAsyncThunk(
  "fetchDeleteUserInfo",
  async (id: string) => {
    const userDoc = doc(dataBase, "users", id);
    await deleteDoc(userDoc);
    return;
  }
);

export const addUserInfo: any = createAsyncThunk(
  "fetchAddUserInfo",
  async (userInfo: UsersInfoInterface) => {
    await addDoc(userRef, userInfo);
    return;
  }
);
