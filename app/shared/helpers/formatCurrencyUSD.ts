export const formatCurrencyUSD = (
  value: number | string | undefined,
  minimumFractionDigits: number = 2
) => {
  return Number(value || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits,
  });
};
