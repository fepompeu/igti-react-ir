import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import CalculatedFields from "../components/CalculatedFields";
import InputValue from "../components/InputValue";
import PercentageBar from "../components/PercentageBar";
import { useIncome } from "../hooks/useIncome";

const incomeValues = {
  fullSalary: "",
  baseINSS: 0,
  discountINSS: 0,
  discountINSSPercentage: 0,
  baseIRPF: 0,
  discountIRPF: 0,
  discountIRPFPercentage: 0,
  netSalary: 0,
  netSalaryPercentage: 0,
};

const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "25px",
  },
}));

const IncomeTaxBody = () => {
  const { values, setValues, handleInputChange } = useIncome(incomeValues);
  const classes = useStyles();

  return (
    <>
      <Container className={classes.body}>
        <InputValue value={values.fullSalary} onChange={handleInputChange} />
      </Container>
      <Container className={classes.body}>
        <CalculatedFields values={values} />
      </Container>
      <PercentageBar values={values} />
    </>
  );
};

export default IncomeTaxBody;
