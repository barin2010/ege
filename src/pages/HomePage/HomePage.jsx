import React from "react";
import Header from "../../components/Header/Header";
import Border from "../../components/Border/Border";
import Advantages from "../../components/Advantages/Advantages";
import Rates from "../../components/Rates/Rates";
import Reviews from "../../components/Reviews/Reviews";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Border />
      <Advantages />
      <Rates />
      <Reviews />
    </div>
  );
};

export default HomePage;
