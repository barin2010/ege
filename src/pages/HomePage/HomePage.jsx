import React from "react";
import Header from "../../components/Header/Header";
import Border from "../../components/Border/Border";
import Advantages from "../../components/Advantages/Advantages";
import Rates from "../../components/Rates/Rates";
import Reviews from "../../components/Reviews/Reviews";
import Courses from "../../components/Courses/Courses";
import Process from "../../components/Process/Process";
import Items from "../../components/Items/Items";
import Team from "../../components/Team/Team";
import Vuz from "../../components/Vuz/Vuz";
import Cases from "../../components/Cases/Cases";
import Lesson from "../../components/Lesson/Lesson";
import Success from "../../components/Success/Success";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Border />
      <Advantages />
      <Rates />
      <Reviews />
      <Courses />
      <Process />
      <Items />
      <Team />
      <Vuz />
      <Cases />
      <Lesson />
      <Success />
      <Footer />
    </div>
  );
};

export default HomePage;
