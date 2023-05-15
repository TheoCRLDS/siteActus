import "./Search.css";
import Menu from "../layouts/Menu/Menu";
import Footer from "../layouts/Footer/Footer";
import Actus from "../layouts/Actus/Actus";
import { useState, useEffect } from "react";

function Search() {
  // Variables d'état
  const [actus, setActus] = useState([{}]);
  const [search, setSearch] = useState("?");
  const [input, setInput] = useState("");

  // Fonctions

  const getInput = (e) => {
    setInput(e.target.value);
  };

  const saveInput = () => {
    setSearch(input);
    console.log("Search : ", search);
  };

  const getNewsResponse = async () => {
    let topNewsResponse = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=ed2f043a457a4d36b0f63c4425bf102d`
    );
    let topNewsDonnees = await topNewsResponse.json();
    setActus(topNewsDonnees.articles);
    console.log("actus : ", actus);
  };

  const renderActus = () => {
    return actus.map((e, key) => {
      return (
        <Actus key={key} image={e.urlToImage} title={e.title} actu={e.url} />
      );
    });
  };

  useEffect(() => {
    getNewsResponse(), [search, input];
  }, [search, input]);

  return (
    <>
      <div>
        <nav>
          <Menu />
        </nav>
      </div>
      <div className="searchContainer">
        <h2>Rechercher</h2>
        <input
          type="text"
          id="text"
          placeholder="Rechercher"
          onChange={getInput}
        />
        <button onClick={saveInput}>Rechercher</button>
      </div>
      <div className="actus">{renderActus()}</div>
      <div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Search;
