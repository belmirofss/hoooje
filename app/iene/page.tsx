import { JPYBRL, fetchCurrency } from "../shared/api/fetchCurrency";
import { Page } from "../shared/components/Page";
import { Title } from "../shared/components/Title";
import { Value } from "../shared/components/Value";
import { formatCurrencyBRL } from "../shared/helpers/formatCurrencyBRL";

export default async function Iene() {
  const response = await fetchCurrency(JPYBRL);

  return (
    <Page>
      <Title>
        A cotaçâo do <b>Iene</b> em Real hoje é
      </Title>
      <Value>{formatCurrencyBRL(response.ask, 4)}</Value>
    </Page>
  );
}
