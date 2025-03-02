export const formatCurrencyEUR = (
  value: number | string | undefined,
  minimumFractionDigits: number = 2
) => {
  return Number(value || 0).toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits,
  });
};
