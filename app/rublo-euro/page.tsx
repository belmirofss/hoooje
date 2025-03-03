import { RUBEUR, fetchCurrency } from "../shared/api/fetchCurrency";
import { Page } from "../shared/components/Page";
import { Title } from "../shared/components/Title";
import { Value } from "../shared/components/Value";
import { formatCurrencyEUR } from "../shared/helpers/formatCurrencyEUR";

export default async function RubloEuro() {
  const response = await fetchCurrency(RUBEUR);

  return (
    <Page>
      <Title>
        A cotação do <b>Rublo</b> em Euro hoje é
      </Title>
      <Value>{formatCurrencyEUR(response.ask, 4)}</Value>
    </Page>
  );
}
