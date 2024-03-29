import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src="Logo.png" alt="" />
      <nav>
        <Link to={`/`}>Accueil</Link>
        <Link to={`/a-propos`}>A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;
