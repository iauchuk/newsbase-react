import moment from "moment/moment";

export const Moment = (format, date) => {
  if (!date || !format) {return null}
  const transformedDate = moment(Number(date)).format(format.toString());
  return transformedDate;
};