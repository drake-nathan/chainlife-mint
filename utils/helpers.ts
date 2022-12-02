export const intlNumberFormat = (value: number) => {
  return new Intl.NumberFormat().format(value);
};
