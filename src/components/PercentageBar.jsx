import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import React from "react";

const PercentageBar = (props) => {
  const { values } = props;

  return (
    <Container>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell
              style={{
                width: values.discountINSSPercentage + "%",
                background: "#e67e22",
              }}
            ></TableCell>
            <TableCell
              style={{
                width: values.discountIRPFPercentage + "%",
                background: "#c0392b",
              }}
            ></TableCell>
            <TableCell
              style={{
                width: values.netSalaryPercentage + "%",
                background: "#16a085",
              }}
            ></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div style={{ padding: "10px" }}></div>
    </Container>
  );
};

export default PercentageBar;
