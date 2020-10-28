import { makeStyles } from "@material-ui/core";
import React from "react";
import Input from "../components/Input";
import {
  formatterValue,
  getValueAndPercentageFormated,
} from "../helpers/numberFormat";

const useStyles = makeStyles((theme) => ({
  inss: {
    "& .MuiInputBase-input": {
      color: "#e67e22",
    },
  },
  irpf: {
    "& .MuiInputBase-input": {
      color: "#c0392b",
    },
  },
  netSalary: {
    "& .MuiInputBase-input": {
      color: "#16a085",
    },
  },
}));

function CalculatedFields({ values }) {
  const classes = useStyles();

  return (
    <>
      <Input
        label={"Base INSS"}
        name={"baseINSS"}
        value={formatterValue(values.baseINSS)}
        inputProps={{ readOnly: true }}
      />
      <Input
        label={"INSS Discount"}
        name={"discountINSS"}
        value={getValueAndPercentageFormated(
          values.discountINSS,
          values.discountINSSPercentage
        )}
        inputProps={{ readOnly: true }}
        className={classes.inss}
      />
      <Input
        label={"IRPF Base"}
        name={"baseIRPF"}
        value={formatterValue(values.baseIRPF)}
        inputProps={{ readOnly: true }}
      />
      <Input
        label={"IRPF Discount"}
        name={"discountIRPF"}
        value={getValueAndPercentageFormated(
          values.discountIRPF,
          values.discountIRPFPercentage
        )}
        inputProps={{ readOnly: true }}
        className={classes.irpf}
      />
      <Input
        label={"Net Salary"}
        name={"netSalary"}
        value={getValueAndPercentageFormated(
          values.netSalary,
          values.netSalaryPercentage
        )}
        inputProps={{ readOnly: true }}
        className={classes.netSalary}
      />
    </>
  );
}

export default CalculatedFields;
