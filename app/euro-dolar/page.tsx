import { EURUSD, fetchCurrency } from "../shared/api/fetchCurrency";
import { Page } from "../shared/components/Page";
import { Title } from "../shared/components/Title";
import { Value } from "../shared/components/Value";
import { formatCurrencyUSD } from "../shared/helpers/formatCurrencyUSD";

export default async function EuroDolar() {
  const response = await fetchCurrency(EURUSD);

  return (
    <Page>
      <Title>
        A cotação do <b>Euro</b> em Dólar hoje é
      </Title>
      <Value>{formatCurrencyUSD(response.ask)}</Value>
    </Page>
  );
}
