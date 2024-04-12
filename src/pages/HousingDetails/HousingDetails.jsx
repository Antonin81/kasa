import { useLocation, Navigate } from "react-router-dom";
import SlideShow from "../../components/SlideShow/SlideShow";
import Collapse from "../../components/Collapse/Collapse";

function HousingDetails() {
  const { state } = useLocation();
  if (!state || !state.housingData) {
    return <Navigate to="/error" />;
  }
  const { housingData } = state;
  const rating = [];
  for (let i = 1; i < 6; i++) {
    if (i <= housingData.rating) {
      rating.push(<img src="/img/active-star.png" alt="" />);
    } else {
      rating.push(<img src="/img/inactive-star.png" alt="" />);
    }
  }
  return (
    <main className="details-page-main">
      <SlideShow images={housingData.pictures} />
      <div className="housing-infos">
        <div className="first-section">
          <h1>{housingData.title}</h1>
          <p>{housingData.location}</p>
          <div className="housing-tags">
            {housingData.tags.map((tag) => (
              <div className="housing-tag" key={tag}>
                <p>{tag}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="second-section">
          <div className="host">
            <div className="host-name">
              <p>{housingData.host.name.split(" ")[0]}</p>
              <p>{housingData.host.name.split(" ")[1]}</p>
            </div>
            <div className="host-picture">
              <img src={housingData.host.picture} alt="" />
            </div>
          </div>
          <div className="stars">{rating.map((star) => star)}</div>
        </div>
      </div>
      <div className="collapses-container">
        <Collapse title={"Descrition"} texts={[housingData.description]} />
        <Collapse title={"Equipements"} texts={[...housingData.equipments]} />
      </div>
    </main>
  );
}

export default HousingDetails;
