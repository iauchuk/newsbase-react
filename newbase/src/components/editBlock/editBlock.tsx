import React from "react";
import { Button } from "@mui/material";
import { editBlockLabels } from "./editBlock.labels";

interface EditBlockPropsInterface {
  primaryEvent?: any;
  secondaryEvent?: any;
}

export const EditBlock = (props: EditBlockPropsInterface) => {
  const { primaryEvent, secondaryEvent } = props;
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
          className="primary-button"
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
          className="secondary-button"
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
