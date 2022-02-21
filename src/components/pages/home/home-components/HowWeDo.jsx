import React from "react";
import { Link } from "react-router-dom";

const Howwedo = () => {
  return (
    <div className="home__howwedo">
      <div className="home__howwedo--left">
        <div className="howwedo-content">
          <img
            className="howwedo-content--image"
            src="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-new-dedicate-team.svg&w=32&q=100"
            alt="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-new-dedicate-team.svg&w=32&q=100"
            width="30px"
            height="30px"
          ></img>
          <div className="howwedo-content--title">Dedicated Team</div>
          <div className="howwedo-content--desc">
            Hire a full-time team that deserves your trust with the best rate in
            Asia.
          </div>
        </div>
        <div className="howwedo-content">
          <img
            className="howwedo-content--image"
            src="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-new-time-material.svg&w=32&q=100"
            alt="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-new-time-material.svg&w=32&q=100"
            width="30px"
            height="30px"
          ></img>
          <div className="howwedo-content--title">Time Material</div>
          <div className="howwedo-content--desc">
            Recruit your hourly-paid team and streamline through your product
            milestones.
          </div>
        </div>
        <div className="howwedo-content">
          <img
            className="howwedo-content--image"
            src="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-new-fixed-price.svg&w=32&q=100"
            alt="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-new-fixed-price.svg&w=32&q=100"
            width="30px"
            height="30px"
          ></img>
          <div className="howwedo-content--title">Fixed Price</div>
          <div className="howwedo-content--desc">
            Regardless of the time and expense, your budget is fixed with us.
          </div>
        </div>
      </div>
      <div className="home__howwedo--right">
        <div className="howwedo-title">How We Do</div>
        <Link to="/" className="howwedo-button">
          learn more
        </Link>
      </div>
    </div>
  );
};

export default Howwedo;
