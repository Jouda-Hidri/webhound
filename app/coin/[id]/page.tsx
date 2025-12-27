interface Coin {
  id: string;
  name: string;
  symbol: string;
  price: number;
}

interface Props {
  params: { id: string };
}

export default async function CoinDetailsPage({ params }: Props) {
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(`${API_URL}/${params.id}`);
  const coin: Coin = await res.json();

  return (
    <div>
      <h1>{coin.name} ({coin.symbol})</h1>
      <p>Price: ${coin.price}</p>
    </div>
  );
}
