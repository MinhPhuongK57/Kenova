import React from "react";
import { Link } from "react-router-dom";

const Provide = () => {
  return (
    <section className="home__provide container__padding">
      <div
        className="home__provide--left wow animate__fadeInUp"
        data-wow-duration="0.8s"
        data-wow-delay="0.3s"
      >
        <Link to="/" className="provide-title">
          What We Provide
          <img
            src="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-arrow-right-big.svg&w=32&q=100"
            alt="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-arrow-right-big.svg&w=32&q=100"
          />
        </Link>
        <Link to="/" className="provide-button">
          learn more
        </Link>
      </div>
      <div className="home__provide--right">
        <Link to="/odc-service" className="provide-content">
          <div
            className="wow animate__fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.3s"
          >
            <img
              className="provide-content--image"
              src="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-new-offshore.svg&w=32&q=100"
              alt="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-new-offshore.svg&w=32&q=100"
              width="30px"
              height="30px"
            ></img>
            <div className="provide-content--title"> Offshore Development </div>
            <div className="provide-content--desc">
              Go beyond your in -house team and get access to our vast software
              engineering talent pool.
            </div>
          </div>
        </Link>
        <Link to="/devops-service" className="provide-content">
          <div
            className="wow animate__fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.3s"
          >
            <img
              className="provide-content--image"
              src="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-new-dev-op.svg&w=32&q=100"
              alt="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-new-dev-op.svg&w=32&q=100"
              width="30px"
              height="30px"
            ></img>
            <div className="provide-content--title"> DevOps Service </div>
            <div className="provide-content--desc">
              Automate your Workflows to deliver more value.Focus on the Dev and
              leave the Ops to us.
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Provide;
