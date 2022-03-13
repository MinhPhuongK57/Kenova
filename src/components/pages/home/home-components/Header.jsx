import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="home__header container__padding">
      <div
        className="home__header--heading wow animate__fadeInUp"
        data-wow-duration="0.8s"
        data-wow-delay="0.3s"
      >
        <p>Build your</p>
        <p>Remote Team</p>
      </div>
      <div
        className="home__header--desc wow animate__fadeInUp"
        data-wow-duration="0.8s"
        data-wow-delay="0.3s"
      >
        <p>
          Let our outstanding tech talents give you more than just a helping
          hand
        </p>
      </div>
      <Link
        to="/"
        className="home__header--button wow animate__fadeInUp"
        data-wow-duration="0.8s"
        data-wow-delay="0.3s"
      >
        get started
      </Link>
    </section>
  );
};

export default Header;
