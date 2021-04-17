import { useState } from "react";
import "./styles.css";

export default function App() {
  const moviesList = {
    Action: [
      { name: "John Wick Franchise", year: "2014-2019" },
      { name: "Fight Club", year: "1999" },
      { name: "Seven Samurai", year: "1958" },
      { name: "Mad Max Fury Road", year: "2015" },
      { name: "Bourne (Series)", year: "2002-2012" }
    ],

    Thriller: [
      { name: "Old Boy", year: "2003" },
      { name: "Zodiac", year: "2007" },
      { name: "Burried", year: "2007" },
      { name: "Se7en", year: "1995" },
      { name: "I saw the Devil", year: "2011" },
      { name: "Gone Girl", year: "2014" }
    ],

    Drama: [
      { name: "Minari", year: "2020" },
      { name: "Citizen Kane", year: "1941" },
      { name: "Parasite", year: "2019" },
      { name: "The Godfather", year: "1972" },
      { name: "Dunkirk", year: "2017" }
    ],
    Fantasy: [
      { name: "Harry Potter Series", year: "2001-2011" },
      { name: "Pirates of Caribbean", year: "2001-2017" },
      { name: "Man of Steel", year: "2014" },
      { name: "Iron Man", year: "2008" },
      { name: "Captain America: The Winter Soldier", year: "2014" }
    ],
    Nolan: [
      { name: "Dark Knight Triology", year: "2005-2012" },
      { name: "Interstellar", year: "2014" },
      { name: "Inception", year: "2010" },
      { name: "Insomnia", year: "2002" },
      { name: "The Prestige", year: "2006" },
      { name: "Memento", year: "2000" }
    ]
  };

  const genreList = Object.keys(moviesList);

  const [userGenre, setUserGenre] = useState("Action");

  function genreClickHandler(genre) {
    setUserGenre(genre);
  }

  return (
    <div className="App">
      <h1>MovieFlix.</h1>
      <p>I love cinema. So i created a list of few of my favorite movies.</p>

      <main>
        <h2>Select Any one genre out of the following. </h2>
        <div className="genre-container">
          {genreList.map((genre) => {
            return (
              <button
                key={genre}
                onClick={() => genreClickHandler(genre)}
                className="genre-block"
              >
                {genre}
              </button>
            );
          })}
        </div>

        <ul className="movie-list">
          {moviesList[userGenre].map((movie) => {
            return (
              <li className="movie-list-item">
                <h3>{movie.name}</h3>
                <p>{movie.year}</p>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
