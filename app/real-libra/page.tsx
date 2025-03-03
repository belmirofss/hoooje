import { BRLGBP, fetchCurrency } from "../shared/api/fetchCurrency";
import { Page } from "../shared/components/Page";
import { Title } from "../shared/components/Title";
import { Value } from "../shared/components/Value";
import { formatCurrencyGBP } from "../shared/helpers/formatCurrencyGBP";

export default async function RealLibra() {
  const response = await fetchCurrency(BRLGBP);

  return (
    <Page>
      <Title>
        A cotação do <b>Real</b> em Libra hoje é
      </Title>
      <Value>{formatCurrencyGBP(response.ask)}</Value>
    </Page>
  );
}
