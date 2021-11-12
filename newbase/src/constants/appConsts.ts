export const default_api_url =
  "https://cloud.feedly.com/v3/streams/contents?streamId=feed/https://www.fca.org.uk/news/rss.xml&unreadOnly=False";

export const default_time_format = "DD.MM.YYYY HH-MM-SS";
export const default_regexp = new RegExp("[a-zA-Z]{1,9}");
export const userInfoInitial = { name: "", surname: "", role: "" };
export const readingLabelsStatus = {
  truthy: "Прочитано",
  falsy: "Не прочитано",
};
