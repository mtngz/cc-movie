import React, { Fragment, useState } from "react";

import Header from "./components/Header";
import MovieList from "./components/MovieList";
import MovieFilter from "./components/MovieFilter";

function App({ movies }) {
  const [searchTitle, setSearchTitle] = useState("");
  const [selectLanguage, setSelectLanguage] = useState("");
  return (
    <Fragment>
      <Header />
      <MovieFilter
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        selectLanguage={selectLanguage}
        setSelectLanguage={setSelectLanguage}
      />
      <MovieList
        movies={movies}
        searchTitle={searchTitle}
        selectLanguage={selectLanguage}
      />
    </Fragment>
  );
}

export default App;
