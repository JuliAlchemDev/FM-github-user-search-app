import React, { useState } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import { GitHubUser } from "./types/github";
import { mockUser } from "./mocks/github.mock";
import Loader from "./components/UI/Loader/Loader";

const App: React.FC = () => {
  const [user, setUser] = useState<GitHubUser | null>(mockUser);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (username: string) => {
    setIsLoading(true);
    setError("");
    const minDelay = new Promise((resolve) => setTimeout(resolve, 3000));

    try {
      const [response] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        minDelay,
      ]);

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
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} error={error} />
      {isLoading ? <Loader /> : <ProfileCard user={user} />}
    </>
  );
};

export default App;
