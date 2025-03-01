import { CADUSD, fetchCurrency } from "../shared/api/fetchCurrency";
import { Page } from "../shared/components/Page";
import { Title } from "../shared/components/Title";
import { Value } from "../shared/components/Value";
import { formatCurrencyBRL } from "../shared/helpers/formatCurrencyBRL";

export default async function DolarCanadense() {
  const response = await fetchCurrency(CADUSD);

  return (
    <Page>
      <Title>
        A cotaçâo do <b>Dólar Canadense</b> em Real hoje é
      </Title>
      <Value>{formatCurrencyBRL(response.ask)}</Value>
    </Page>
  );
}
