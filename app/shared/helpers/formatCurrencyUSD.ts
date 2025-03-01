export const formatCurrencyUSD = (
  value: number | string | undefined,
  minimumFractionDigits: number = 2
) => {
  return Number(value || 0).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits,
  });
};
