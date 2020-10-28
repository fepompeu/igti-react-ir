const formatterValue = (value) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formatter.format(value);
};

const formatterPercentage = (percentage) => {
  return `(${percentage}%)`;
};

const getValueAndPercentageFormated = (value, percentage) => {
  const valueFormatted = formatterValue(value);
  const percentageFormated = formatterPercentage(percentage);
  const valueFormattedAndPercentageFormatted = `${valueFormatted} ${percentageFormated}`;
  return valueFormattedAndPercentageFormatted;
};

export { formatterValue, getValueAndPercentageFormated };
