import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 py-8">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-lg">Mais populares</h2>
        <Link href="/dolar">Dólar para Real</Link>
        <Link href="/euro">Euro para Real</Link>
        <Link href="/libra">Libra para Real</Link>
        <Link href="/bitcoin">Bitcoin para Real</Link>
        <Link href="/bitcoin-dolar">Bitcoin para Dólar</Link>
        <Link href="/ethereum">Ethereum para Real</Link>
        <Link href="/ethereum-dolar">Ethereum para Dólar</Link>
        <Link href="/ouro">Cotação Ouro em Real</Link>
        <Link href="/prata">Cotação Prata em Real</Link>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-lg">Moedas</h2>
        <Link href="/baht-tailandes">Baht Tailandês para Real</Link>
        <Link href="/bolivar-venezuelano">Bolívar Venezuelano para Real</Link>
        <Link href="/boliviano">Boliviano para Real</Link>
        <Link href="/coroa-dinamarquesa">Coroa Dinamarquesa para Real</Link>
        <Link href="/coroa-norueguesa">Coroa Norueguesa para Real</Link>
        <Link href="/coroa-sueca">Coroa Sueca para Real</Link>
        <Link href="/dinar-servio">Dinar Sérvio para Real</Link>
        <Link href="/dolar">Dólar para Real</Link>
        <Link href="/dolar-euro">Dólar para Euro</Link>
        <Link href="/dolar-libra">Dólar para Libra</Link>
        <Link href="/dolar-turismo">Dólar Turismo para Real</Link>
        <Link href="/dolar-australiano">Dólar Australiano para Real</Link>
        <Link href="/dolar-australiano-dolar">
          Dólar Australiano para Dólar
        </Link>
        <Link href="/dolar-canadense">Dólar Canadense para Real</Link>
        <Link href="/dolar-canadense-dolar">Dólar Canadense para Dólar</Link>
        <Link href="/dolar-hong-kong">Dólar de Hong Kong para Real</Link>
        <Link href="/dolar-neozelandes">Dólar Neozelandês para Real</Link>
        <Link href="/dolar-taiuanes">Dólar Taiuanês para Real</Link>
        <Link href="/euro">Euro para Real</Link>
        <Link href="/euro-dolar">Euro para Dólar</Link>
        <Link href="/euro-libra">Euro para Libra</Link>
        <Link href="/franco-suico">Franco Suiço para Real</Link>
        <Link href="/franco-suico-dolar">Franco Suiço para Dólar</Link>
        <Link href="/guarani-paraguaio">Guarani Paraguaio para Real</Link>
        <Link href="/iene">Iene para Real</Link>
        <Link href="/iene-dolar">Iene para Dólar</Link>
        <Link href="/iene-euro">Iene para Euro</Link>
        <Link href="/libra">Libra para Real</Link>
        <Link href="/libra-dolar">Libra para Dólar</Link>
        <Link href="/libra-euro">Libra para Euro</Link>
        <Link href="/nova-lira-turca">Nova Lira Turca para Real</Link>
        <Link href="/peso-argentino">Peso Argentino para Real</Link>
        <Link href="/peso-chileno">Peso Chileno para Real</Link>
        <Link href="/peso-colombiano">Peso Colombiano para Real</Link>
        <Link href="/peso-mexicano">Peso Mexicano para Real</Link>
        <Link href="/peso-uruguaio">Peso Uruguaio para Real</Link>
        <Link href="/rand-sul-africano">Rand Sul-Africano para Real</Link>
        <Link href="/real-dolar">Real para Dólar</Link>
        <Link href="/real-euro">Real para Euro</Link>
        <Link href="/real-libra">Real para Libra</Link>
        <Link href="/riyal-saudita">Riyal Saudita para Real</Link>
        <Link href="/rublo">Rublo para Real</Link>
        <Link href="/rublo-dolar">Rublo para Dólar</Link>
        <Link href="/rublo-euro">Rublo para Euro</Link>
        <Link href="/rupia-indiana">Rúpia Indiana para Real</Link>
        <Link href="/sol-do-peru">Sol do Peru para Real</Link>
        <Link href="/won-sul-coreano">Won Sul-Coreano para Real</Link>
        <Link href="/yuan">Yuan para Real</Link>
        <Link href="/yuan-dolar">Yuan para Dólar</Link>
        <Link href="/zloti-polones">Zlóti Polonês para Real</Link>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-lg">Criptomoedas</h2>
        <Link href="/binance-coin">Binance Coin para Real</Link>
        <Link href="/binance-coin-dolar">Binance Coin para Dólar</Link>
        <Link href="/binance-coin-euro">Binance Coin para Euro</Link>
        <Link href="/bitcoin">Bitcoin para Real</Link>
        <Link href="/bitcoin-dolar">Bitcoin para Dólar</Link>
        <Link href="/bitcoin-euro">Bitcoin para Euro</Link>
        <Link href="/dogecoin">Dogecoin para Real</Link>
        <Link href="/dogecoin-dolar">Dogecoin para Dólar</Link>
        <Link href="/dogecoin-euro">Dogecoin para Euro</Link>
        <Link href="/ethereum">Ethereum para Real</Link>
        <Link href="/ethereum-dolar">Ethereum para Dólar</Link>
        <Link href="/ethereum-euro">Ethereum para Euro</Link>
        <Link href="/litecoin">Litecoin para Real</Link>
        <Link href="/litecoin-dolar">Litecoin para Dólar</Link>
        <Link href="/litecoin-euro">Litecoin para Euro</Link>
        <Link href="/solana">Solana para Real</Link>
        <Link href="/solana-dolar">Solana para Dólar</Link>
        <Link href="/solana-euro">Solana para Euro</Link>
        <Link href="/xrp">XRP para Real</Link>
        <Link href="/xrp-dolar">XRP para Dólar</Link>
        <Link href="/xrp-euro">XRP para Euro</Link>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-lg">Commodities</h2>
        <Link href="/ouro">Cotação Ouro em Real</Link>
        <Link href="/ouro-dolar">Cotação Ouro em Dólar</Link>
        <Link href="/ouro-euro">Cotação Ouro em Libra</Link>
        <Link href="/prata">Cotação Prata em Real</Link>
        <Link href="/prata-dolar">Cotação Prata em Dólar</Link>
        <Link href="/prata-euro">Cotação Prata em Libra</Link>
      </div>
    </div>
  );
}
