import "./Home.css";
import Menu from "../layouts/Menu/Menu";
import Footer from "../layouts/Footer/Footer";
import { useEffect, useState } from "react";
import Actus from "../layouts/Actus/Actus";

function Home() {
  // Variables d'état
  const [actus, setActus] = useState([{}]);

  // Fonctions

  const getNewsResponse = async () => {
    let topNewsResponse = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=4&apiKey=ed2f043a457a4d36b0f63c4425bf102d`
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
    getNewsResponse();
  }, []);

  return (
    <>
      <div>
        <nav>
          <Menu />
        </nav>
      </div>
      <div className="accueilContainer">
        <h1>Accueil</h1>
        <h4>Top actus : </h4>
        <div className="actus">{renderActus()}</div>
      </div>
      <div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Home;
