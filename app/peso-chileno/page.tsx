import { CLPBRL, fetchCurrency } from "../shared/api/fetchCurrency";
import { Page } from "../shared/components/Page";
import { Title } from "../shared/components/Title";
import { Value } from "../shared/components/Value";
import { formatCurrencyBRL } from "../shared/helpers/formatCurrencyBRL";

export default async function PesoChileno() {
  const response = await fetchCurrency(CLPBRL);

  return (
    <Page>
      <Title>
        A cotação do <b>Peso Chileno</b> em Real hoje é
      </Title>
      <Value>{formatCurrencyBRL(response.ask, 4)}</Value>
    </Page>
  );
}
