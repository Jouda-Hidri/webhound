import Link from "next/link";

const CoinCard = ({ card }) => {
  return (
    <Link href={`/coin/${card.id}`} className="coin-card">
      <div className="coin-header">
        <div>
          <h2>{card.title}</h2>
          <p>{card.subtitle}</p>
          <p>{card.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CoinCard;
