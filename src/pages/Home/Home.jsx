// import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import HousingCard from "../../components/HousingCard/HousingCard";

function Home() {
  return (
    <main>
      <Banner text={"Chez vous, partout et ailleurs"} />
      <div className="housing-card-list">
        <HousingCard img={"IMG.png"} link={"/fiche-logement/id-logement1"} />
        <HousingCard img={"IMG.png"} link={"/fiche-logement/id-logement2"} />
        <HousingCard img={"IMG.png"} link={"/fiche-logement/id-logement3"} />
        <HousingCard img={"IMG.png"} link={"/fiche-logement/id-logement4"} />
        <HousingCard img={"IMG.png"} link={"/fiche-logement/id-logement5"} />
        <HousingCard img={"IMG.png"} link={"/fiche-logement/id-logement6"} />
        <HousingCard img={"IMG.png"} link={"/fiche-logement/id-logement7"} />
      </div>
      {/* <Link to={`/fiche-logement/id-logement1`}>Logement 1</Link>
      <Link to={`/fiche-logement/id-logement2`}>Logement 2</Link>
      <Link to={"/fiche-logement/id-logementTest"}>Logement test</Link>
      <Link to={"/nbhjjhhgchjnbjh,nhgc,hj,hgc,"}>Test erreur 404</Link> */}
    </main>
  );
}

export default Home;
