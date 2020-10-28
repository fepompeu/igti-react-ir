import { useState } from "react";
import { calculateSalaryFrom } from "../libs/salary";

const useIncome = (initialFValues) => {
  const [values, setValues] = useState(initialFValues);

  const handleInputChange = (event) => {
    const { value } = event.target;
    const newIncomeTax = calculateSalaryFrom(value);
    if (value >= 0) {
      setValues(newIncomeTax);
    }
  };

  return {
    values,
    setValues,
    handleInputChange,
  };
};

export { useIncome };
