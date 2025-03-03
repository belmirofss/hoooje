export const formatCurrencyGBP = (
  value: number | string | undefined,
  minimumFractionDigits: number = 2
) => {
  return Number(value || 0).toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits,
  });
};
