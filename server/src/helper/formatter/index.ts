export const dateFormatter = (value: string): Date => {
  return new Date(value.replace(/(\d{4})(\d{2})(\d{2})/, '$1/$2/$3'));
};

export const currencyFormatter = (value: string): string => {
  const currency = parseFloat(value);
  const currencyFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(currency);

  return currencyFormatted;
};

export const cpforCnpjFormatter = (value: string): string => {
  if (value.length === 14) {
    return value.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5',
    );
  }

  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};
