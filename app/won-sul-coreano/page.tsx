import { KRWBRL, fetchCurrency } from "../shared/api/fetchCurrency";
import { Page } from "../shared/components/Page";
import { Title } from "../shared/components/Title";
import { Value } from "../shared/components/Value";
import { formatCurrencyBRL } from "../shared/helpers/formatCurrencyBRL";

export default async function WonSulCoreano() {
  const response = await fetchCurrency(KRWBRL);

  return (
    <Page>
      <Title>
        A cotação do <b>Won Sul-Coreano</b> em Real hoje é
      </Title>
      <Value>{formatCurrencyBRL(response.ask, 4)}</Value>
    </Page>
  );
}
