import "./Search.css";
import Menu from "../layouts/Menu/Menu";
import Footer from "../layouts/Footer/Footer";

function Search() {
  return (
    <>
      <div>
        <nav>
          <Menu />
        </nav>
      </div>
      <div className="searchContainer">
        <h2>Rechercher</h2>
        <input type="text" id="text" placeholder="Rechercher" />
      </div>
      <div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Search;
