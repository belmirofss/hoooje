import { LTCEUR, fetchCurrency } from "../shared/api/fetchCurrency";
import { Page } from "../shared/components/Page";
import { Title } from "../shared/components/Title";
import { Value } from "../shared/components/Value";
import { formatCurrencyEUR } from "../shared/helpers/formatCurrencyEUR";

export default async function LitecoinEuro() {
  const response = await fetchCurrency(LTCEUR);

  return (
    <Page>
      <Title>
        A cotação do <b>Litecoin</b> em Euro hoje é
      </Title>
      <Value>{formatCurrencyEUR(response.ask)}</Value>
    </Page>
  );
}
