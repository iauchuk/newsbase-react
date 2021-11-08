import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export const CustomTable = (props: any) => {
  console.log("columnConfig", props.columns);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.columns.map((column: any) => (
              <TableCell>
                <Typography>{column.headerName}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/*{props.rows.map((row: any) => (*/}
          {/*  <TableRow*/}
          {/*    key={row.originId}*/}
          {/*    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}*/}
          {/*  >*/}
          {/*    <TableCell component="th" scope="row">*/}
          {/*      {row.language}*/}
          {/*    </TableCell>*/}
          {/*    <TableCell align="right">{row.id}</TableCell>*/}
          {/*    <TableCell align="right">{row.fingerprint}</TableCell>*/}
          {/*    <TableCell align="right">{row.originId}</TableCell>*/}
          {/*    <TableCell align="right">{row.origin}</TableCell>*/}
          {/*  </TableRow>*/}
          {/*))}*/}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
