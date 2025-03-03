import { DKKBRL, fetchCurrency } from "../shared/api/fetchCurrency";
import { Page } from "../shared/components/Page";
import { Title } from "../shared/components/Title";
import { Value } from "../shared/components/Value";
import { formatCurrencyBRL } from "../shared/helpers/formatCurrencyBRL";

export default async function CoroaDinamarquesa() {
  const response = await fetchCurrency(DKKBRL);

  return (
    <Page>
      <Title>
        A cotação do <b>Coroa Dinamarquesa</b> em Real hoje é
      </Title>
      <Value>{formatCurrencyBRL(response.ask)}</Value>
    </Page>
  );
}
