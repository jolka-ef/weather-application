import React, { useState } from "react";
import { SearchIcon } from "../icons/SearchIcon.js";
import "../../css/components/Search.css";

export const Search = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  return (
    <header className="Header">
      <h1>Weather</h1>
      <form
        className="Search"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(query);
        }}
      >
        <label className="VisuallyHidden">Search city</label>
        <input
          className="Search-input"
          type="search"
          placeholder="Search City"
          name=""
          value={"" || query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button className="Search-button" type="submit">
          <SearchIcon />
        </button>
      </form>
    </header>
  );
};
