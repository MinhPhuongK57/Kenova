import React from "react";
import Header from "./home-components/Header";
import Achievements from "./home-components/Achievements";
import Provide from "./home-components/Provide";
import HowWeDo from "./home-components/HowWeDo";
import ExpertAt from "./home-components/ExpertAt";
import Achieved from "./home-components/Achieved";
import Company from "./home-components/Company";
import Message from "./home-components/Message";
import Footer from "../../footer/Footer";

const Home = () => {
  return (
    <div className="container container__padding">
      <section className="home">
        <Header />
        <Achievements />
        <Provide />
        <HowWeDo />
        <ExpertAt />
        <Achieved />
        <Company />
        <Message />
      </section>
    </div>
  );
};

export default Home;
