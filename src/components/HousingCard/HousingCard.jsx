import { Link } from "react-router-dom";

function HousingCard({ img, link }) {
  return (
    <Link className="housing-card" to={link}>
      <img src={img} alt="" />
      <p>Titre de la location</p>
    </Link>
  );
}

export default HousingCard;
