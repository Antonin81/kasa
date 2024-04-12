import { Link, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();
  const headerLinks = [
    {
      path: "/",
      label: "Accueil",
    },
    { path: "/a-propos", label: "À propos" },
  ];
  return (
    <header>
      <img src="img/Logo.png" alt="" />
      <nav>
        {headerLinks.map((headerLink) => (
          <Link
            key={headerLink.path}
            to={headerLink.path}
            className={headerLink.path === pathname ? "active" : ""}
          >
            {headerLink.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
