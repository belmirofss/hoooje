import { JPYUSD, fetchCurrency } from "../shared/api/fetchCurrency";
import { Page } from "../shared/components/Page";
import { Title } from "../shared/components/Title";
import { Value } from "../shared/components/Value";
import { formatCurrencyUSD } from "../shared/helpers/formatCurrencyUSD";

export default async function IeneDolar() {
  const response = await fetchCurrency(JPYUSD);

  return (
    <Page>
      <Title>
        A cotação do <b>Iene</b> em Dólar hoje é
      </Title>
      <Value>{formatCurrencyUSD(response.ask, 4)}</Value>
    </Page>
  );
}
