import React, { useMemo } from "react";
import moment from "moment/moment";

interface transformDateInterface {
  format: string;
  date: number;
}

export const Moment = (props: transformDateInterface) => {
  const { format, date } = props;
  const transformedDate = useMemo(() => moment(date).format(format), [date]);

  return <div>{transformedDate}</div>;
};
