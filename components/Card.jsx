import Link from "next/link";

const CoinCard = ({ card, aiFlag }) => {
  return (
    <Link href={`/card/${card.id}?ai=${aiFlag}`} className="coin-card">
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