import { useParams } from "react-router-dom";

function HousingDetails() {
  const { selectedHousing } = useParams();
  console.log(new URLSearchParams(window.location.search));
  return (
    <main>
      <p>{selectedHousing}</p>
    </main>
  );
}

export default HousingDetails;
