import { Navigate, useParams } from "react-router-dom";
import SlideShow from "../../components/SlideShow/SlideShow";
import Collapse from "../../components/Collapse/Collapse";
import { useFetchOneHousing } from "../../utils/hooks/useFetchOneHousing";
import React from "react";

function HousingDetails() {
  const { selectedHousing } = useParams();
  const { data, isLoading, error } = useFetchOneHousing(selectedHousing);

  if (!selectedHousing || error) {
    return <Navigate to="/error" />;
  }

  function displayRating() {
    const rating = [];
    for (let i = 1; i < 6; i++) {
      if (i <= data.rating) {
        rating.push(
          <img src="/img/active-star.png" alt="" key={"star-" + i} />,
        );
      } else {
        rating.push(
          <img src="/img/inactive-star.png" alt="" key={"star-" + i} />,
        );
      }
    }
    return rating;
  }

  return (
    <main className="details-page-main">
      {isLoading || data === null ? (
        <p>Chargement ...</p>
      ) : data ? (
        <React.Fragment>
          <SlideShow images={data.pictures} />
          <div className="housing-infos">
            <div className="first-section">
              <h1>{data.title}</h1>
              <p>{data.location}</p>
              <div className="housing-tags">
                {data.tags.map((tag) => (
                  <div className="housing-tag" key={tag}>
                    <p>{tag}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="second-section">
              <div className="host">
                <div className="host-name">
                  <p>{data.host.name.split(" ")[0]}</p>
                  <p>{data.host.name.split(" ")[1]}</p>
                </div>
                <div className="host-picture">
                  <img src={data.host.picture} alt="" />
                </div>
              </div>
              <div className="stars">{displayRating().map((star) => star)}</div>
            </div>
          </div>
          <div className="collapses-container">
            <Collapse title={"Descrition"} texts={[data.description]} />
            <Collapse title={"Equipements"} texts={[...data.equipments]} />
          </div>
        </React.Fragment>
      ) : (
        <Navigate to="/error" />
      )}
    </main>
  );
}

export default HousingDetails;
