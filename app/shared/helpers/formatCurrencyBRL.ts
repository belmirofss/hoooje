export const formatCurrencyBRL = (
  value: number | string | undefined,
  minimumFractionDigits: number = 2
) => {
  return Number(value || 0).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits,
  });
};
