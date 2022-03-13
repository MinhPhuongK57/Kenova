import React, { Component } from "react";
import Header from "./home-components/Header";
import Achievements from "./home-components/Achievements";
import Provide from "./home-components/Provide";
import HowWeDo from "./home-components/HowWeDo";
import ExpertAt from "./home-components/ExpertAt";
import Achieved from "./home-components/Achieved";
import Company from "./home-components/Company";
import Message from "./home-components/Message";
import WOW from "wowjs";

class Home extends Component {
  componentDidMount = () => {
    new WOW.WOW({
      live: false,
    }).init();
  };

  render() {
    return (
      <div className="container" componentDidMount>
        <main className="home">
          <Header />
          <Achievements />
          <Provide />
          <HowWeDo />
          <ExpertAt />
          <Achieved />
          <Company />
          <Message />
        </main>
      </div>
    );
  }
}

export default Home;
