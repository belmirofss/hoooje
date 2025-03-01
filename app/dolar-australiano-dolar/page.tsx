import { AUDUSD, fetchCurrency } from "../shared/api/fetchCurrency";
import { Page } from "../shared/components/Page";
import { Title } from "../shared/components/Title";
import { Value } from "../shared/components/Value";
import { formatCurrencyUSD } from "../shared/helpers/formatCurrencyUSD";

export default async function DolarAustralianoDolar() {
  const response = await fetchCurrency(AUDUSD);

  return (
    <Page>
      <Title>
        A cotação do <b>Dólar Australiano</b> em Dólar hoje é
      </Title>
      <Value>{formatCurrencyUSD(response.ask)}</Value>
    </Page>
  );
}
