import { Link } from "react-router-dom";
import React from "react";

function HousingCard({ housing }) {
  return (
    <Link className="housing-card" to={`/fiche-logement/${housing.id}`}>
      {housing.cover ? (
        <img src={housing.cover} alt="" />
      ) : (
        <React.Fragment></React.Fragment>
      )}
      <div></div>
      <p>{housing.title}</p>
    </Link>
  );
}

export default HousingCard;
