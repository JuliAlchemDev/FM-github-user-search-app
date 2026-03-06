import React, { useState } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import { GitHubUser } from "./types/github";
import { mockUser } from "./mocks/github.mock";



const App: React.FC = () => { 
  const [user, setUser] = useState<GitHubUser | null>(mockUser);
  const [error, setError] = useState<string>("");

  const handleSearch = async (username: string) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        setUser(null);
        setError("No results");
      } else {
        const data = await response.json();
        setUser(data);
        setError("");
      }
    } catch {
      setUser(null);
      setError("No results");
    }
  };
  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} error={error}/>
      <ProfileCard user={user} />
    </>
  );
};

export default App;
