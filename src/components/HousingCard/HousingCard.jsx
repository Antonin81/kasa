import { Link } from "react-router-dom";

function HousingCard({ housing }) {
  return (
    <Link
      className="housing-card"
      to={`/fiche-logement/${housing.id}`}
      state={{ housingData: housing }}
    >
      <img src={housing.cover} alt="" />
      <div></div>
      <p>{housing.title}</p>
    </Link>
  );
}

export default HousingCard;
