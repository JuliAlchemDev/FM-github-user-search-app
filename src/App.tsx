import React from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import ProfileCard from "./components/ProfileCard/ProfileCard";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <ProfileCard />
    </>
  );
};

export default App;
