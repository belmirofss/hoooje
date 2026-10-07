export const formatNumber = (value: number, maximumFractionDigits = 2) =>
  value.toLocaleString("pt-BR", {
    minimumFractionDigits: Math.min(2, maximumFractionDigits),
    maximumFractionDigits,
  });

export const formatPercent = (value: number | string) => {
  const number = Number(value) || 0;
  return `${number >= 0 ? "+" : "−"}${formatNumber(Math.abs(number))}%`;
};
