import React, { useState } from "react";
import { Button } from "@mui/material";
import { UserInfoFormDialog } from "../userInfoFormDialog/userInfoFormDialog";
import { useDispatch, useSelector } from "react-redux";
import { UsersInfoInterface } from "../../../interfaces/usersInfoInterface/usersInfoInterface";
import { userInfoInitial } from "../../../constants/appConsts";
import {
  addUserInfo,
  getUsersInfo,
} from "../../../store/userInfo/userInfo.actions";
import { userInfoHeaderLabel } from "./userInfoHeader.label";
import styledButton from "../../../styles/button.styles";
import styledUserInfoHeader from "./userInfoHeader.styles";
import { getRoles } from "../../../store/roles/roles.actions";
import { StoreStateInterface } from "../../../interfaces/storeStateInterface/storeStateInterface";

export const UserInfoHeader = () => {
  const dispatch = useDispatch();
  const buttonStyled = styledButton();
  const userInfoHeaderStyled = styledUserInfoHeader();
  const [statusDialog, setStatusDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const handleOpenDialog = () => {
    setStatusDialog(true);
    setDialogTitle("Add");
    getRoles()(dispatch);
  };

  const rolesList = useSelector(
    (state: StoreStateInterface) => state?.roles?.rolesList ?? []
  );

  const handleSubmit = (formValues: UsersInfoInterface) => {
    addUserInfo(formValues)(dispatch);
    getUsersInfo()(dispatch);
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
          options={rolesList}
          initValue={userInfoInitial}
          dialogTitle={dialogTitle}
        />
      ) : (
        ""
      )}
    </div>
  );
};
