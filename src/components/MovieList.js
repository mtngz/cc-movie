import React from "react";
import MovieCard from "./MovieCard";
import Row from "react-bootstrap/Row";

function MoviesList({ movies, searchTitle, selectLanguage }) {
  const filteredMovies = movies.filter(
    (entry) =>
      entry.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      entry.original_language.includes(selectLanguage)
  );

  return (
    <Row className="movies-list justify-content-around">
      {filteredMovies.map((entry) => (
        <MovieCard key={entry.id} movie={entry} />
      ))}
    </Row>
  );
}

export default MoviesList;
