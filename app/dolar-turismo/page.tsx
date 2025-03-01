import { USDBRLT, fetchCurrency } from "../shared/api/fetchCurrency";
import { Page } from "../shared/components/Page";
import { Title } from "../shared/components/Title";
import { Value } from "../shared/components/Value";
import { formatCurrencyBRL } from "../shared/helpers/formatCurrencyBRL";

export default async function DolarTurismo() {
  const response = await fetchCurrency(USDBRLT);

  return (
    <Page>
      <Title>
        A cotaçâo do <b>Dólar Turismo</b> em Real hoje é
      </Title>
      <Value>{formatCurrencyBRL(response.ask)}</Value>
    </Page>
  );
}
