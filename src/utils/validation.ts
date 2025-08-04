export const validationValue = (regex: RegExp, value: string) => {
  return regex.test(value);
};
