import { Page } from "../shared/components/Page";

export default async function Dolar() {
  const response = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL",
    { next: { revalidate: 60 } }
  );
  const data = await response.json();
  const dolar = data.USDBRL.ask;

  return (
    <Page>
      <h1>Euro</h1>
      <span>{dolar}</span>
    </Page>
  );
}
