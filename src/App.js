import React, { useState } from 'react'
import Card from './Card'
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";

function App() {
    const [searchValue, setSearchValue] = useState("");
    const [movies, setMovies] = useState([]);
    const [sort, setSort] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const request = await fetch(
          "https://api.themoviedb.org/3/search/movie?api_key=da3f98d1b5a2a202896dd26efd46986c&language=fr-FR&query=" + searchValue
        );
        const data = await request.json();
        setMovies(data.results)
        console.log(data.results);
    }

  return (
    <div>
      <header>
        <h1>React Movies</h1>
        <div className="routingBtn">
          <button>Accueuil</button>
          <button>Coups de coeur</button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Titre du film"
            onInput={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <input type="submit" value="Rechercher" />
        </form>
        <div className="sortContainer">
          <button
            onClick={() => {
              setSort("top");
            }}
          >
            {" "}
            <AiOutlineArrowUp /> TOP
          </button>
          <button
            onClick={() => {
              setSort("flop");
            }}
          >
            {" "}
            <AiOutlineArrowDown /> FLOP
          </button>
        </div>
      </header>
      <main>
        {movies
          .sort((a, b) => {
            if (sort == "top") {
              return b.vote_average - a.vote_average;
            } else if (sort == "flop") {
              return a.vote_average - b.vote_average;
            } else {
              return 0;
            }
          })
          .map((movie, index) => {
            return <Card movie={movie} key={index} />;
          })}
      </main>
    </div>
  );
}

export default App