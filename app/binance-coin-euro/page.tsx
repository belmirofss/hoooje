import { BNBEUR, fetchCurrency } from "../shared/api/fetchCurrency";
import { Page } from "../shared/components/Page";
import { Title } from "../shared/components/Title";
import { Value } from "../shared/components/Value";
import { formatCurrencyEUR } from "../shared/helpers/formatCurrencyEUR";

export default async function BinanceCoinEuro() {
  const response = await fetchCurrency(BNBEUR);

  return (
    <Page>
      <Title>
        A cotação do <b>Binance Coin</b> em Euro hoje é
      </Title>
      <Value>{formatCurrencyEUR(response.ask)}</Value>
    </Page>
  );
}
