import moment from "moment/moment";
import {useMemo} from "react";

export const Moment = (format, date) => {
  if (!date || !format) {return null}
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const transformedDate = useMemo(() => moment(Number(date)).format(format.toString()), [format, date]);
  return transformedDate;
};