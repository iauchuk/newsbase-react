import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import * as _ from "lodash";
import "./userInfoList.css";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateInterface } from "../../../interfaces/storeStateInterface/storeStateInterface";
import { EditBlock } from "../../editBlock/editBlock";
import { UserInfoFormDialog } from "../userInfoFormDialog/userInfoFormDialog";
import { UsersInfoInterface } from "../../../interfaces/usersInfoInterface/usersInfoInterface";
import { userInfoInitial } from "../../../constants/appConsts";
import {
  changeUsersInfo,
  getUsersInfo,
} from "../../../store/userInfo/userInfo.actions";
import { userInfoListLabels } from "./userInfoList.labels";
import Typography from "../../typography/typography";

export const UserInfoList = () => {
  const dispatch = useDispatch();
  const [statusDialog, setStatusDialog] = useState(false);
  const [editableUser, setEditableUser] = useState(userInfoInitial);
  const [dialogTitle, setDialogTitle] = useState("");

  useEffect(() => {
    getUsersInfo()(dispatch);
  }, [dispatch]);
  const userInfoList = useSelector(
    (state: StoreStateInterface) => state?.users?.usersList
  );
  const isExistUserInfoList = _.size(userInfoList) > 0;

  const handleSubmit = (formValues: UsersInfoInterface) => {
    const transformedList = _.unionBy([formValues], userInfoList, "id");
    changeUsersInfo(transformedList)(dispatch);
    getUsersInfo()(dispatch);
  };

  const handleClose = (flag: boolean) => {
    setStatusDialog(flag);
  };

  const editUserItem = (id: number) => {
    setEditableUser(_.find(userInfoList, { id: id }) as UsersInfoInterface);
    setStatusDialog(true);
    setDialogTitle("Edit");
  };
  const deleteUserItem = (id: number): void => {
    const changeUsersList = _.without(
      userInfoList,
      _.find(userInfoList, { id: id })
    );
    changeUsersInfo(changeUsersList)(dispatch);
    getUsersInfo()(dispatch);
  };

  return (
    <div>
      {isExistUserInfoList ? (
        <List>
          {_.map(userInfoList, (userInfoItem: any, index: number) => (
            <ListItem key={index}>
              <ListItemText>{userInfoItem.name}</ListItemText>
              <ListItemText>{userInfoItem.surname}</ListItemText>
              <ListItemText>{userInfoItem.role}</ListItemText>
              <EditBlock
                primaryEvent={() => {
                  editUserItem(userInfoItem.id);
                }}
                secondaryEvent={() => {
                  deleteUserItem(userInfoItem.id);
                }}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography text={userInfoListLabels.emptyList} />
      )}
      {!!editableUser ? (
        <UserInfoFormDialog
          isOpen={statusDialog}
          onSubmit={handleSubmit}
          onClose={handleClose}
          initValue={editableUser}
          dialogTitle={dialogTitle}
        />
      ) : (
        ""
      )}
    </div>
  );
};
