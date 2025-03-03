import { PYGBRL, fetchCurrency } from "../shared/api/fetchCurrency";
import { Page } from "../shared/components/Page";
import { Title } from "../shared/components/Title";
import { Value } from "../shared/components/Value";
import { formatCurrencyBRL } from "../shared/helpers/formatCurrencyBRL";

export default async function GuaraniParaguaio() {
  const response = await fetchCurrency(PYGBRL);

  return (
    <Page>
      <Title>
        A cotação do <b>Guarani Paraguaio</b> em Real hoje é
      </Title>
      <Value>{formatCurrencyBRL(response.ask, 6)}</Value>
    </Page>
  );
}
