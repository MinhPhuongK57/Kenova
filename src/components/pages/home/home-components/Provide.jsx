import React from "react";
import { Link } from "react-router-dom";

const Provide = () => {
  return (
    <div className="home__provide">
      <div className="home__provide--left">
        <div className="provide-title"> What We Provide </div>
        <Link to="/" className="provide-button">
          learn more
        </Link>
      </div>
      <div className="home__provide--right">
        <Link to="/odc-service" className="provide-content">
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
        </Link>
        <Link to="/devops-service" className="provide-content">
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
        </Link>
      </div>
    </div>
  );
};

export default Provide;
