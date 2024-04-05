import { Link } from "react-router-dom";

function Header({ activeLink }) {
  return (
    <header>
      <img src="Logo.png" alt="" />
      <nav>
        <Link
          to={`/`}
          className={
            activeLink !== undefined && activeLink === 0 ? "active" : ""
          }
        >
          Accueil
        </Link>
        <Link
          to={`/a-propos`}
          className={
            activeLink !== undefined && activeLink === 1 ? "active" : ""
          }
        >
          A Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
