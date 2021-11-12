import React from "react";
import { isPresent } from "../helpers/helpers";
import Typography from "../components/typography/typography";

interface TransferLabelsInterface {
  truthy: string;
  falsy: string;
}

export const TransferBooleanPipe = (
  value: boolean,
  transferLabels: TransferLabelsInterface
) => {
  if (!isPresent(value)) {
    return;
  }
  return (
    <div>
      {value ? (
        <Typography text={transferLabels.truthy} />
      ) : (
        <Typography text={transferLabels.falsy} />
      )}
    </div>
  );
};
