import { BTCUSD, fetchCurrency } from "../shared/api/fetchCurrency";
import { Page } from "../shared/components/Page";
import { Title } from "../shared/components/Title";
import { Value } from "../shared/components/Value";
import { formatCurrencyUSD } from "../shared/helpers/formatCurrencyUSD";

export default async function BitcoinDolar() {
  const response = await fetchCurrency(BTCUSD);

  return (
    <Page>
      <Title>
        A cotação do <b>Bitcoin</b> em Dólar hoje é
      </Title>
      <Value>{formatCurrencyUSD(response.ask)}</Value>
    </Page>
  );
}
