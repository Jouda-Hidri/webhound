import Link from "next/link";

const CoinCard = ({ card }) => {
  return (
    <Link href={`/card/${card.id}/`} className="coin-card">
      <div className="coin-header">
        <div>
          <h2>{card.title}</h2>
          {card.subtitle && <p>{card.subtitle}</p>}
          {card.description && <p>{card.description}</p>}
        </div>
      </div>
    </Link>
  );
};

export default CoinCard;