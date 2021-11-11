import { NewsColumnConfigInterface } from "../../interfaces/newsInterfaces/newsColumnConfigInterface";

export const columnConfig: NewsColumnConfigInterface[] = [
  { field: "lang", headerName: "language", minWidth: 200 },
  { field: "fieldId", headerName: "id", minWidth: 200 },
  { field: "fingerprint", headerName: "fingerprint", minWidth: 200 },
  { field: "keywords", headerName: "keywords", minWidth: 200 },
  { field: "originId", headerName: "originId", minWidth: 200 },
  { field: "origin", headerName: "origin", minWidth: 200 },
  { field: "title", headerName: "title", minWidth: 200 },
  { field: "author", headerName: "author", minWidth: 200 },
  { field: "crawled", headerName: "crawled", minWidth: 200 },
  { field: "published", headerName: "published", minWidth: 200 },
  { field: "summary", headerName: "summary", maxWidth: 800 },
  { field: "alternate", headerName: "alternate", minWidth: 200 },
  { field: "visual", headerName: "visual", minWidth: 200 },
  { field: "canonicalUrl", headerName: "canonicalUrl", minWidth: 200 },
  { field: "unread", headerName: "unread", minWidth: 200 },
];
