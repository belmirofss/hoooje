import { XRPBRL, fetchCurrency } from "../shared/api/fetchCurrency";
import { Page } from "../shared/components/Page";
import { Title } from "../shared/components/Title";
import { Value } from "../shared/components/Value";
import { formatCurrencyBRL } from "../shared/helpers/formatCurrencyBRL";

export default async function XRP() {
  const response = await fetchCurrency(XRPBRL);

  return (
    <Page>
      <Title>
        A cotação do <b>XRP</b> em Real hoje é
      </Title>
      <Value>{formatCurrencyBRL(response.ask)}</Value>
    </Page>
  );
}
