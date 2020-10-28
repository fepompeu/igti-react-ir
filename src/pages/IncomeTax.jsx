import {
  Container,
  Paper,
  TableContainer,
  Typography,
} from "@material-ui/core";
import React from "react";
import IncomeTaxBody from "./IncomeTaxBody";

const IncomeTax = () => {
  return (
    <Container style={{ padding: "50px" }}>
      <TableContainer component={Paper}>
        <Typography variant={"h1"} align={"center"} color={"primary"}>
          Income Tax Calculator
        </Typography>
        <IncomeTaxBody />
      </TableContainer>
    </Container>
  );
};

export default IncomeTax;
