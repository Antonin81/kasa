import { Link } from "react-router-dom";

function HousingCard({ img, link }) {
  return (
    <Link
      className="housing-card"
      style={{ "--test": `url(${img})` }}
      to={link}
    >
      <p>Titre de la location</p>
    </Link>
  );
}

export default HousingCard;
