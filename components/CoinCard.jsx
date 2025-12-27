import Link from "next/link";

const CoinCard = ({ coin }) => {
  return (
    <Link href={`/coin/${coin.id}`} className="coin-card">
      <div className="coin-header">
        <div>
          <h2>{coin.username}</h2>
          <p>{coin.name}</p>
          <p>{coin.email}</p>
        </div>
      </div>
    </Link>
  );
};

export default CoinCard;
