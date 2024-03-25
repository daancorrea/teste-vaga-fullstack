export const isValidCpforCNPJ = (value: string): boolean => {
  let regex: RegExp;
  if (value.length === 14) {
    regex = /(\d{2}[-.\s]?\d{3}[-.\s]?\d{3}[-.\s\/]?\d{4}[-.\s]?\d{2})/g;
    return RegExp(regex).test(value);
  }
  regex = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
  return RegExp(regex).test(value);
};
