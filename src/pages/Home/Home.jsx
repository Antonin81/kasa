import "../../styles/main.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Project started</p>
        <Link to={"/nbhjjhhgchjnbjh,nhgc,hj,hgc,"}>Test erreur 404</Link>
      </header>
    </div>
  );
}

export default Home;
