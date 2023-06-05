import React from "react";
import Banner from "../Banner/Banner";
import AvailableTasks from "../AvailableTasks/AvailableTasks";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Task Vault | Home</title>
      </Helmet>
      <Banner></Banner>
      <AvailableTasks></AvailableTasks>
    </div>
  );
};

export default Home;
