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
export const DKKBRL = "DKK-BRL";
export const HKDBRL = "HKD-BRL";
export const RUBBRL = "RUB-BRL";
export const MXNBRL = "MXN-BRL";
export const JPYEUR = "JPY-EUR";
export const XRPEUR = "XRP-EUR";
export const DOGEBRL = "DOGE-BRL";
export const DOGEEUR = "DOGE-EUR";
export const DOGEUSD = "DOGE-USD";
export const BRLGBP = "BRL-GBP";
export const NOKBRL = "NOK-BRL";
export const SOLUSD = "SOL-USD";
export const NZDBRL = "NZD-BRL";
export const SARBRL = "SAR-BRL";
export const XAGUSD = "XAG-USD";
export const PLNBRL = "PLN-BRL";
export const SEKBRL = "SEK-BRL";
export const THBBRL = "THB-BRL";
export const TRYBRL = "TRY-BRL";
export const TWDBRL = "TWD-BRL";
export const VEFBRL = "VEF-BRL";
export const ZARBRL = "ZAR-BRL";
export const CLPBRL = "CLP-BRL";
export const PYGBRL = "PYG-BRL";
export const UYUBRL = "UYU-BRL";
export const COPBRL = "COP-BRL";
export const PENBRL = "PEN-BRL";
export const BOBBRL = "BOB-BRL";
export const INRBRL = "INR-BRL";
export const EURGBP = "EUR-GBP";
export const RUBEUR = "RUB-EUR";
export const RUBUSD = "RUB-USD";
export const XAGEUR = "XAG-EUR";
export const XAUUSD = "XAU-USD";
export const XAUEUR = "XAU-EUR";
export const XAUBRL = "XAU-BRL";
export const XAGBRL = "XAG-BRL";
export const RSDBRL = "RSD-BRL";
export const KRWBRL = "KRW-BRL";
export const SOLBRL = "SOL-BRL";
export const SOLEUR = "SOL-EUR";
export const BNBBRL = "BNB-BRL";
export const BNBUSD = "BNB-USD";
export const BNBEUR = "BNB-EUR";
export const USDGBP = "USD-GBP";

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
    | typeof DKKBRL
    | typeof HKDBRL
    | typeof RUBBRL
    | typeof MXNBRL
    | typeof JPYEUR
    | typeof XRPEUR
    | typeof DOGEBRL
    | typeof DOGEEUR
    | typeof DOGEUSD
    | typeof BRLGBP
    | typeof NOKBRL
    | typeof SOLUSD
    | typeof NZDBRL
    | typeof SARBRL
    | typeof XAGUSD
    | typeof PLNBRL
    | typeof SEKBRL
    | typeof THBBRL
    | typeof TRYBRL
    | typeof TWDBRL
    | typeof VEFBRL
    | typeof ZARBRL
    | typeof CLPBRL
    | typeof PYGBRL
    | typeof UYUBRL
    | typeof COPBRL
    | typeof PENBRL
    | typeof BOBBRL
    | typeof INRBRL
    | typeof EURGBP
    | typeof RUBEUR
    | typeof RUBUSD
    | typeof XAGEUR
    | typeof XAUUSD
    | typeof XAUEUR
    | typeof XAUBRL
    | typeof XAGBRL
    | typeof RSDBRL
    | typeof KRWBRL
    | typeof SOLBRL
    | typeof SOLEUR
    | typeof BNBBRL
    | typeof BNBUSD
    | typeof BNBEUR
    | typeof USDGBP
) => {
  const response = await fetch(
    `https://economia.awesomeapi.com.br/last/${currency}`,
    { next: { revalidate: 60 } }
  );
  const data = await response.json();
  return data[currency.replace("-", "")];
};
