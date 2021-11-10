import React from "react";
import { Button } from "@mui/material";

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
          Edit
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
          Delete
        </Button>
      ) : (
        ""
      )}
    </div>
  );
};
