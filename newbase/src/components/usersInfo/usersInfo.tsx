import React from "react";
import { UserInfoHeader } from "./userInfoHeader/userInfoHeader";
import { UserInfoList } from "./userInfoList/userInfoList";

export const UsersInfo = () => {
  localStorage.setItem(
    "userInfoList",
    JSON.stringify([
      {
        id: 1,
        name: "Adam",
        surname: "Qwerty",
        role: "user",
      },
      {
        id: 2,
        name: "Tomas",
        surname: "ASDFG",
        role: "admin",
      },
      {
        id: 3,
        name: "Nick",
        surname: "Cvnnvb",
        role: "user",
      },
      {
        id: 4,
        name: "Jack",
        surname: "Qwerty",
        role: "editor",
      },
    ])
  );

  return (
    <div>
      <h2>user info</h2>
      <UserInfoHeader />
      <UserInfoList />
    </div>
  );
};
