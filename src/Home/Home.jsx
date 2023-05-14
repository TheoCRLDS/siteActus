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
      `https://newsapi.org/v2/top-headlines?country=fr&category=technology&pageSize=4&apiKey=ed2f043a457a4d36b0f63c4425bf102d`
    );
    console.log("topNewsResponse : ", topNewsResponse);
    let topNewsDonnees = await topNewsResponse.json();
    console.log("topNewsDonnees : ", topNewsDonnees);
    setActus(topNewsDonnees);
    console.log("actus : ", actus);
  };

  useEffect(() => {
    console.log("Update actus : ", actus), [actus];
  });

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
        <div className="actus">{getNewsResponse()}</div>
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
