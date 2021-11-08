import React from "react";
import { GetNewsResponse } from "../../../interfaces/getNewsResponse/getNewsResponse";
import { checkArray, isPresent } from "../../../helpers/helpers";
import { DataGrid } from "@mui/x-data-grid";
import { CustomTable } from "../../customTable/customTable";

const columnConfig = [
  { field: "language", headerName: "language", minWidth: 200 },
  { field: "id", headerName: "id", minWidth: 200 },
  { field: "fingerprint", headerName: "fingerprint", minWidth: 200 },
  { field: "keywords", headerName: "keywords", minWidth: 200 },
  { field: "originId", headerName: "originId", minWidth: 200 },
  { field: "origin", headerName: "origin", minWidth: 200 },
  { field: "title", headerName: "title", minWidth: 200 },
  { field: "author", headerName: "author", minWidth: 200 },
  { field: "crawled", headerName: "crawled", minWidth: 200 },
  { field: "published", headerName: "published", minWidth: 200 },
  { field: "summary", headerName: "summary", minWidth: 200 },
  { field: "alternate", headerName: "alternate", minWidth: 200 },
  { field: "visual", headerName: "visual", minWidth: 200 },
  { field: "canonicalUrl", headerName: "canonicalUrl", minWidth: 200 },
  { field: "unread", headerName: "unread", minWidth: 200 },
];

const NewsTable = (props: GetNewsResponse) => {
  if (
    !isPresent(props) ||
    !isPresent(props.items) ||
    checkArray(props.items).length === 0
  ) {
    return <div></div>;
  }

  return (
    <div style={{ height: 520, width: "100%" }}>
      <CustomTable
        rows={props.items}
        columns={columnConfig}
        autoPageSize={true}
        pageSize={10}
        rowsPerPageOptions={[10]}
        loading={props.items.length === 0}
      />
    </div>
  );
};

export default NewsTable;
