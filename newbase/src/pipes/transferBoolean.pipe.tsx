import React from "react";
import { Typography } from "@mui/material";

export const TransferBooleanPipe = (value: boolean) => {
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
