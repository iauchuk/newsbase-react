import React from "react";
import { Button } from "@mui/material";
import { editBlockLabels } from "./editBlock.labels";
import styledButton from "../../styles/button.styles";

interface EditBlockPropsInterface {
  primaryEvent?: any;
  secondaryEvent?: any;
}

export const EditBlock = (props: EditBlockPropsInterface) => {
  const { primaryEvent, secondaryEvent } = props;
  const editButtonStyle = styledButton();
  const primaryClick = () => {
    primaryEvent();
  };
  const secondaryClick = () => {
    secondaryEvent();
  };

  return (
    <div>
      {primaryEvent ? (
        <Button
          className={editButtonStyle.button}
          variant="contained"
          onClick={primaryClick}
        >
          {editBlockLabels.edit}
        </Button>
      ) : (
        ""
      )}

      {secondaryEvent ? (
        <Button
          className={editButtonStyle.button}
          variant="outlined"
          onClick={secondaryClick}
        >
          {editBlockLabels.delete}
        </Button>
      ) : (
        ""
      )}
    </div>
  );
};
