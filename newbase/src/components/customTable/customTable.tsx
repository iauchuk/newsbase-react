import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./customTable.css";
import {
  Box,
  IconButton,
  Link,
  TablePagination,
  useTheme,
} from "@mui/material";
import {
  Alternate,
  NewsItem,
} from "../../interfaces/getNewsResponse/getNewsResponse";
import { TransferBooleanPipe } from "../../pipes/transferBoolean.pipe";
import { useState } from "react";
import { TablePaginationInterface } from "../../interfaces/tablePaginationInterface/tablePaginationInterface";
import { default_time_format } from "../../constants/appConsts";
import { Moment } from "../moment/moment";
import { NewsColumnConfigInterface } from "../../interfaces/newsInterfaces/newsColumnConfigInterface";
import { NewsTablePropsInterface } from "../../interfaces/newsInterfaces/newsTablePropsInterface";

export const TablePaginationActions = (props: TablePaginationInterface) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <Typography>Next</Typography>
        ) : (
          <Typography>Previous</Typography>
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <Typography>Previous</Typography>
        ) : (
          <Typography>Next</Typography>
        )}
      </IconButton>
    </Box>
  );
};

export const CustomTable = (props: NewsTablePropsInterface) => {
  const { rows, columns } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer className="custom-table-wrapper" component={Paper}>
        <Table
          sx={{ minWidth: 650, maxHeight: 500 }}
          aria-label="simple table"
          stickyHeader
        >
          <TableHead>
            <TableRow>
              {columns.map(
                (column: NewsColumnConfigInterface, index: number) => (
                  <TableCell key={index} sx={{ maxWidth: column.maxWidth }}>
                    <Typography>{column.headerName}</Typography>
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row: NewsItem, index: number) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  style={{
                    position: "sticky",
                    background: "lightgrey",
                    zIndex: 2,
                    left: 0,
                  }}
                  component="th"
                  scope="row"
                >
                  <Typography>{row.language}</Typography>
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    position: "sticky",
                    left: 99,
                    background: "lightgrey",
                    zIndex: 2,
                  }}
                >
                  <Typography>{row.id}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography>{row.fingerprint}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography>{row.keywords}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography>{row.originId}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography>{row.origin.htmlUrl}</Typography>
                  <Typography>{row.origin.streamId}</Typography>
                  <Typography>{row.origin.title}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography>{row.title}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography>{row.author}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Moment format={default_time_format} date={row.crawled} />
                </TableCell>
                <TableCell align="right">
                  <Moment format={default_time_format} date={row.published} />
                </TableCell>
                <TableCell align="right" className="content-cell">
                  <Typography>{row.summary.content}</Typography>
                </TableCell>
                <TableCell align="right">
                  {row.alternate.map((item: Alternate) => (
                    <Link
                      key={item.href}
                      target="_blank"
                      href={item.href}
                      type={item.type}
                    >
                      Link
                    </Link>
                  ))}
                </TableCell>
                <TableCell align="right">
                  <img
                    className="custom-table-wrapper--image"
                    alt="News view"
                    src={row.visual.url}
                  />
                </TableCell>
                <TableCell align="right">
                  <Typography>{row.canonicalUrl}</Typography>
                </TableCell>
                <TableCell align="right">
                  {TransferBooleanPipe(row.unread)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TablePagination
              className="pagination"
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};
