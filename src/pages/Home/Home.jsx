// import { Link } from "react-router-dom";
import React from "react";
import Banner from "../../components/Banner/Banner";
import HousingCard from "../../components/HousingCard/HousingCard";
import { useFetch } from "../../utils/hooks";

function Home() {
  const { data, isLoading, error } = useFetch("data/logements.json");

  function displayCards(data) {
    return (
      <React.Fragment>
        {data.map((logement) => {
          return <HousingCard housing={logement} key={logement.id} />;
        })}
      </React.Fragment>
    );
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    <main>
      <Banner text={"Chez vous, partout et ailleurs"} img={"img.png"} />
      <div className="housing-card-list">
        {isLoading ? "" : displayCards(data)}
      </div>
    </main>
  );
}

export default Home;
