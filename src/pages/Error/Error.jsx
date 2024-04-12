import { Link } from "react-router-dom";

function Error() {
  return (
    <main className="error-page-main">
      <h1 className="error-title">404</h1>
      <p className="error-subtitle">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link to={"/"}>Retourner sur la page d'accueil</Link>
    </main>
  );
}

export default Error;
