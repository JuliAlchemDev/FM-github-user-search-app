import React, { useState } from "react";
import SearchIcon from "./SearchIcon";
import styles from "./SearchBar.module.css";

const SearchBar: React.FC = () => {
  const [userName, setUserName] = useState("");
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Searching for: ", userName);
  }
  
  return (
    <>
      <form className={styles.searchBar} onSubmit={handleSubmit}>
        <SearchIcon />
        {/* <label for='username'>Search GitHub username…</label> */}
        <input
          id="username"
          type="text"
          placeholder="Search GitHub username…"
        />
        <button type="submit" className={styles.searchBtn}>
          Search
        </button>
      </form>
    </>
  );
};
export default SearchBar;
