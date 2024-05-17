import { Link } from "react-router-dom";

function HousingCard({ housing }) {
  return (
    <Link
      className="housing-card"
      to={`/fiche-logement`}
      state={{ housingData: housing }}
    >
      <img src={housing.cover} alt={housing.title + " cover img"} />
      <div></div>
      <p>{housing.title}</p>
    </Link>
  );
}

export default HousingCard;
