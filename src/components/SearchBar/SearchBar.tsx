import React, { useState } from "react";
import SearchIcon from "./SearchIcon";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  onSearch?: (userName: string) => void;
  error?: string,
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch, error}) => {
  const [userName, setUserName] = useState("");
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSearch?.(userName);
    console.log("Searching for: ", userName);
  }
  
  return (
    <>
      <form className={styles.searchBar} onSubmit={handleSubmit}>
        <div className={styles.searchInput}>
        <SearchIcon />
        <label htmlFor='username' className={styles.srOnly}>Search GitHub username…</label>
        <input
          id="username"
          type="text"
          placeholder="Search GitHub username…"
          value={userName}
          onChange={(e)=> setUserName(e.target.value)}
          className={styles.input}
        />
        {error && <span className={styles.error}>{error}</span>}
        </div>
        <button type="submit" className={styles.searchBtn}>
          Search
        </button>
      </form>
    </>
  );
};
export default SearchBar;
