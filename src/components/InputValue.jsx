import React from "react";
import Input from "../components/Input";

function InputValue({ value, onChange }) {
  return (
    <Input
      label={"Salary"}
      name={"salaryValue"}
      value={value}
      inputProps={{ step: 100 }}
      onChange={onChange}
      type="number"
      fullWidth
      autoFocus
    />
  );
}

export default InputValue;
