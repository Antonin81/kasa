import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

function More() {
  return (
    <main className="more-page-main">
      <Banner text={""} img={"/img/more-banner.png"} />
      <div className="collapses-container">
        <Collapse
          title="Fiabilité"
          texts={[
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
          ]}
        />
        <Collapse
          title="Respect"
          texts={[
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
          ]}
        />
        <Collapse
          title="Service"
          texts={[
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
          ]}
        />
        <Collapse
          title="Sécurité"
          texts={[
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
          ]}
        />
      </div>
    </main>
  );
}

export default More;
