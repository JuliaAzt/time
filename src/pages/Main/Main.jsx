import React from "react";
import "./Main.scss";

import Dashboard from "../../modules/Dashboard";
import Grid from "../../modules/Grid";
import SearchBar from "../../modules/SearchBar";
const Main = () => {
  return (
    <>
      <Dashboard />
      <SearchBar />
      <Grid />
    </>
  );
};

export default Main;
