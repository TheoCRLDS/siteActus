import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/search">Rechercher</Link>
      </nav>
    </div>
  );
}

export default Menu;
