import React, { useState } from "react";
import { Button } from "@mui/material";
import "./userInfoHeader.css";
import { UserInfoFormDialog } from "../userInfoFormDialog/userInfoFormDialog";
import { changeUsersInfo, getUsersInfo } from "../../../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import * as _ from "lodash";
import { StoreStateInterface } from "../../../interfaces/storeStateInterface/storeStateInterface";
import { UsersInfoInterface } from "../../../interfaces/usersInfoInterface/usersInfoInterface";

export const UserInfoHeader = () => {
  const dispatch = useDispatch();
  const userInfoList: UsersInfoInterface[] | undefined = useSelector(
    (state: StoreStateInterface) => state.users
  );
  const [statusDialog, setStatusDialog] = useState(false);
  const handleOpenDialog = () => {
    setStatusDialog(true);
  };
  /**
   * Так как CRUD делаем на фронте, то делаем такой костыль
   */
  const setUserPromise = new Promise((resolve, reject) => {
    resolve(null);
  });

  const resolveFunc = (formValues: UsersInfoInterface) => {
    // @ts-ignore
    const lastIdInList = _.maxBy(userInfoList, "id").id;
    const newItem = { ...formValues, id: lastIdInList + 1 };
    changeUsersInfo(_.union(userInfoList, [newItem]))(dispatch);
  };

  const handleSubmit = (formValues: UsersInfoInterface) => {
    getUsersInfo()(dispatch);
    setUserPromise
      .then(() => {
        resolveFunc(formValues);
      })
      .then(() => {
        getUsersInfo()(dispatch);
      });
  };

  const handleClose = (flag: boolean) => {
    setStatusDialog(flag);
  };

  return (
    <div className="table-header">
      <Button
        variant="contained"
        className="primary-button"
        onClick={handleOpenDialog}
      >
        Add
      </Button>
      <UserInfoFormDialog
        isOpen={statusDialog}
        onSubmit={handleSubmit}
        onClose={handleClose}
      />
    </div>
  );
};
