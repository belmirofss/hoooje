export const BTCBRL = "BTC-BRL";
export const USDBRL = "USD-BRL";
export const AUDBRL = "AUD-BRL";
export const USDBRLT = "USD-BRLT";
export const ETHBRL = "ETH-BRL";
export const EURBRL = "EUR-BRL";
export const EURUSD = "EUR-USD";
export const CHFBRL = "CHF-BRL";
export const JPYBRL = "JPY-BRL";
export const GBPBRL = "GBP-BRL";
export const LTCBRL = "LTC-BRL";
export const ARSBRL = "ARS-BRL";
export const XRPBRL = "XRP-BRL";
export const CNYBRL = "CNY-BRL";
export const CADUSD = "CAD-USD";
export const GBPUSD = "GBP-USD";

export const fetchCurrency = async (
  currency:
    | typeof BTCBRL
    | typeof USDBRL
    | typeof AUDBRL
    | typeof USDBRLT
    | typeof ETHBRL
    | typeof EURBRL
    | typeof EURUSD
    | typeof CHFBRL
    | typeof JPYBRL
    | typeof GBPBRL
    | typeof LTCBRL
    | typeof ARSBRL
    | typeof XRPBRL
    | typeof CNYBRL
    | typeof CADUSD
    | typeof GBPUSD
) => {
  const response = await fetch(
    `https://economia.awesomeapi.com.br/last/${currency}`,
    { next: { revalidate: 60 } }
  );
  const data = await response.json();
  return data[currency.replace("-", "")];
};
