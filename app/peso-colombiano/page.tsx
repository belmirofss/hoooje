import { COPBRL, fetchCurrency } from "../shared/api/fetchCurrency";
import { Page } from "../shared/components/Page";
import { Title } from "../shared/components/Title";
import { Value } from "../shared/components/Value";
import { formatCurrencyBRL } from "../shared/helpers/formatCurrencyBRL";

export default async function PesoColombiano() {
  const response = await fetchCurrency(COPBRL);

  return (
    <Page>
      <Title>
        A cotação do <b>Peso Colombiano</b> em Real hoje é
      </Title>
      <Value>{formatCurrencyBRL(response.ask, 6)}</Value>
    </Page>
  );
}
