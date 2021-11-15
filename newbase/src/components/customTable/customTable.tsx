import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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
import {
  default_time_format,
  readingLabelsStatus,
} from "../../constants/appConsts";
import { NewsColumnConfigInterface } from "../../interfaces/newsInterfaces/newsColumnConfigInterface";
import { NewsTablePropsInterface } from "../../interfaces/newsInterfaces/newsTablePropsInterface";
import { customTableLabels } from "./customTable.labels";
import Typography from "../typography/typography";
import {Moment} from "../../helpers/moment/moment";
import styledCustomTable from "./customTable.styles";

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
          <Typography text={customTableLabels.next} />
        ) : (
          <Typography text={customTableLabels.prev} />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <Typography text={customTableLabels.prev} />
        ) : (
          <Typography text={customTableLabels.next} />
        )}
      </IconButton>
    </Box>
  );
};

export const CustomTable = (props: NewsTablePropsInterface) => {
  const { rows, columns } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customTableStyled = styledCustomTable({backgroundHeader: `#0D5CFF`, backgroundFirsts: `lightgrey`});

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
      <TableContainer className={customTableStyled.customTableWrapper} component={Paper}>
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
                    <Typography text={column.headerName} />
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
                    left: 0,
                  }}
                  component="th"
                  scope="row"
                >
                  <Typography text={row.language} />
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    left: 99,
                  }}
                >
                  <Typography text={row.id} />
                </TableCell>
                <TableCell align="right">
                  <Typography text={row.fingerprint} />
                </TableCell>
                <TableCell align="right">
                  <Typography text={row.keywords} />
                </TableCell>
                <TableCell align="right">
                  <Typography text={row.originId} />
                </TableCell>
                <TableCell align="right">
                  <Typography text={row.origin.htmlUrl} />
                  <Typography text={row.origin.streamId} />
                  <Typography text={row.origin.title} />
                </TableCell>
                <TableCell align="right">
                  <Typography text={row.title} />
                </TableCell>
                <TableCell align="right">
                  <Typography text={row.author} />
                </TableCell>
                <TableCell align="right">
                  <Typography text={Moment(default_time_format, row.crawled)}/>
                </TableCell>
                <TableCell align="right">
                  <Typography text={Moment(default_time_format, row.published)}/>
                </TableCell>
                <TableCell align="right" className={customTableStyled.contentCell}>
                  <Typography text={row.summary.content} />
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
                    className={customTableStyled.customTableWrapperImage}
                    alt="News view"
                    src={row.visual.url}
                  />
                </TableCell>
                <TableCell align="right">
                  <Typography text={row.canonicalUrl} />
                </TableCell>
                <TableCell align="right">
                  {TransferBooleanPipe(row.unread, readingLabelsStatus)}
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
              className={customTableStyled.pagination}
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
