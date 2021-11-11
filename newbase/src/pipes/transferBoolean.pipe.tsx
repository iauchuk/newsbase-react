import React from "react";
import { Typography } from "@mui/material";
import { isPresent } from "../helpers/helpers";

export const TransferBooleanPipe = (value: boolean) => {
  if (!isPresent(value)) {
    return;
  }
  return (
    <div>
      {value ? (
        <Typography>Прочитано</Typography>
      ) : (
        <Typography>Не прочитано</Typography>
      )}
    </div>
  );
};
