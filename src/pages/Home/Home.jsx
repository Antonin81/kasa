import React from "react";
import Banner from "../../components/Banner/Banner";
import HousingCard from "../../components/HousingCard/HousingCard";
import { useFetchAllHousing } from "../../utils/hooks/useFetchAllHousing";

function Home() {
  const { data, isLoading, error } = useFetchAllHousing();
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
      <Banner
        text={"Chez vous, partout et ailleurs"}
        img={"/img/home-banner.png"}
      />
      <div className="housing-card-list">
        {isLoading ? "" : displayCards(data)}
      </div>
    </main>
  );
}

export default Home;
