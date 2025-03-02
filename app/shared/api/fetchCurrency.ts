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
export const CADBRL = "CAD-BRL";
export const GBPUSD = "GBP-USD";
export const CADUSD = "CAD-USD";
export const JPYUSD = "JPY-USD";
export const CHFUSD = "CHF-USD";
export const AUDUSD = "AUD-USD";
export const CNYUSD = "CNY-USD";
export const BTCUSD = "BTC-USD";
export const LTCUSD = "LTC-USD";
export const ETHUSD = "ETH-USD";
export const XRPUSD = "XRP-USD";
export const BRLUSD = "BRL-USD";
export const BRLEUR = "BRL-EUR";
export const USDEUR = "USD-EUR";
export const GBPEUR = "GBP-EUR";
export const BTCEUR = "BTC-EUR";
export const LTCEUR = "LTC-EUR";
export const ETHEUR = "ETH-EUR";

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
    | typeof CADBRL
    | typeof CADUSD
    | typeof GBPUSD
    | typeof JPYUSD
    | typeof CHFUSD
    | typeof AUDUSD
    | typeof CNYUSD
    | typeof BTCUSD
    | typeof LTCUSD
    | typeof ETHUSD
    | typeof XRPUSD
    | typeof BRLUSD
    | typeof BRLEUR
    | typeof USDEUR
    | typeof GBPEUR
    | typeof BTCEUR
    | typeof LTCEUR
    | typeof ETHEUR
) => {
  const response = await fetch(
    `https://economia.awesomeapi.com.br/last/${currency}`,
    { next: { revalidate: 60 } }
  );
  const data = await response.json();
  return data[currency.replace("-", "")];
};
