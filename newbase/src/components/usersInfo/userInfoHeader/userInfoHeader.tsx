import React, { useState } from "react";
import { Button } from "@mui/material";
import { UserInfoFormDialog } from "../userInfoFormDialog/userInfoFormDialog";
import { useDispatch, useSelector } from "react-redux";
import * as _ from "lodash";
import { StoreStateInterface } from "../../../interfaces/storeStateInterface/storeStateInterface";
import { UsersInfoInterface } from "../../../interfaces/usersInfoInterface/usersInfoInterface";
import { userInfoInitial } from "../../../constants/appConsts";
import {
  changeUsersInfo,
  getUsersInfo,
} from "../../../store/userInfo/userInfo.actions";
import { userInfoHeaderLabel } from "./userInfoHeader.label";
import styledButton from "../../../styles/button.styles";
import styledUserInfoHeader from "./userInfoHeader.styles";

export const UserInfoHeader = () => {
  const dispatch = useDispatch();
  const buttonStyled = styledButton();
  const userInfoHeaderStyled = styledUserInfoHeader();
  const userInfoList: UsersInfoInterface[] | undefined = useSelector(
    (state: StoreStateInterface) => state?.users?.usersList
  );
  const [statusDialog, setStatusDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const handleOpenDialog = () => {
    setStatusDialog(true);
    setDialogTitle("Add");
  };
  /**
   * Так как CRUD делаем на фронте, то делаем такой костыль
   */
  const setUserPromise = new Promise((resolve, reject) => {
    resolve(null);
  });

  const resolveFunc = (formValues: any) => {
    const lastIdInList = _.maxBy(userInfoList, "id");
    // @ts-ignore
    const newItem = { ...formValues, id: lastIdInList?.id + 1 };
    changeUsersInfo(_.union(userInfoList, [newItem]))(dispatch);
  };

  const handleSubmit = (formValues: UsersInfoInterface) => {
    setUserPromise
      .then(() => {
        getUsersInfo()(dispatch);
      })
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
    <div className={userInfoHeaderStyled.tableHeader}>
      <Button
        variant="contained"
        className={buttonStyled.button}
        onClick={handleOpenDialog}
      >
        {userInfoHeaderLabel.add}
      </Button>
      {!!userInfoInitial ? (
        <UserInfoFormDialog
          isOpen={statusDialog}
          onSubmit={handleSubmit}
          onClose={handleClose}
          initValue={userInfoInitial}
          dialogTitle={dialogTitle}
        />
      ) : (
        ""
      )}
    </div>
  );
};
