import React from "react";

function MovieFilter({
  searchTitle,
  setSearchTitle,
  selectLanguage,
  setSelectLanguage,
}) {
  function handleChange(event) {
    setSearchTitle(event.target.value);
  }

  function setChange(event) {
    setSelectLanguage(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movie title"
        value={searchTitle}
        onChange={handleChange}
      />
      <select
        name="original_language"
        value={selectLanguage}
        onChange={setChange}
      >
        <option value="">Select language</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="ko">Korean</option>
        <option value="fr">French</option>
        <option value="sv">Swedish</option>
        <option value="zh">Chinese</option>
      </select>
    </div>
  );
}

export default MovieFilter;
