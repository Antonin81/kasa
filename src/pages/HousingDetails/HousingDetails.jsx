import {
  // useParams,
  useLocation,
} from "react-router-dom";
import SlideShow from "../../components/SlideShow/SlideShow";

function HousingDetails() {
  // const { selectedHousing } = useParams();
  const { state } = useLocation();
  const { housingData } = state;
  return (
    <main>
      <SlideShow images={housingData.pictures} />
      <p>{housingData.title}</p>
    </main>
  );
}

export default HousingDetails;
