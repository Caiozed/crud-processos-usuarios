import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

interface Column {
  name: string;
  value: string;
  cellTemplate?: any;
  onclick?: any;
  width?: number;
}

type Props = {
  rows: Array<any>;
  columns: Array<Column>;
};

export default class DataGrid extends Component<Props> {
  render() {
    const { rows, columns } = this.props;
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column, i) => (
                <TableCell
                  width={column.width}
                  key={i}
                  component="th"
                  scope="row"
                >
                  {column.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {rows !== undefined && rows !== null ? (
            <TableBody>
              {rows.map((row: any, i) => (
                <TableRow key={i}>
                  {columns.map((col, j) => (
                    <TableCell width={col.width} key={j} scope="row">
                      {col.cellTemplate !== undefined ? (
                        <Box
                          onClick={() => {
                            if (col.onclick) col.onclick(row);
                          }}
                          component="span"
                          m={1}
                        >
                          {col.cellTemplate}
                        </Box>
                      ) : (
                        row[col.value]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody></TableBody>
          )}
        </Table>
      </TableContainer>
    );
  }
}

// {{
//     if(col.cellTemplate != undefined) {
//         return (<col.cellTemplate>
//             {                    row[col.value]}
//         </col.cellTemplate>)
//     }
// }}
