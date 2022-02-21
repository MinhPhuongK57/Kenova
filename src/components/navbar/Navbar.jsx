import React, { useState } from "react";
import "../../scss/kenova.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isMobile, setMobile } = useState(false);
  return (
    <div className="container container__body">
      <nav className="nav navbar">
        <Link to="/" className="navbar__logo">
          <p> K </p> <p> KENOVA </p> <p> Technology </p>
        </Link>
        <div className="navbar__nav">
          <ul className="navbar__nav--ul">
            <li className="navbar__nav--items">
              <p>
                Services
                <div className="nav__child">
                  <div className="nav__items">
                    <Link to="/odc-service" className="nav__link">
                      <img
                        src="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-new-offshore.svg&w=32&q=100"
                        alt="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-new-offshore.svg&w=32&q=100"
                        width="42px"
                        height="42px"
                      />
                      <div className="nav__content">
                        <div className="nav__content--title">
                          Offshore Development
                        </div>
                        <div className="nav__content--desc">
                          Go beyond your in -house team and get access to our
                          vast software engineering talent pool.
                        </div>
                        <p className="nav__content--link"> Learn more </p>
                      </div>
                    </Link>
                  </div>
                  <div className="nav__items">
                    <Link to="/devops-service" className="nav__link">
                      <img
                        src="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-new-dev-op.svg&w=32&q=100"
                        alt="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-new-dev-op.svg&w=32&q=100"
                        width="42px"
                        height="42px"
                      />
                      <div className="nav__content">
                        <div className="nav__content--title">
                          DevOps Service
                        </div>
                        <div className="nav__content--desc">
                          Automate your Workflows to deliver more value.Focus on
                          the Dev and leave the Ops to us.
                        </div>
                        <p className="nav__content--link"> Learn more </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </p>
            </li>
            <li className="navbar__nav--items">
              <Link to="/cases" className="navbar__nav--link">
                Cases
              </Link>
            </li>
            <li className="navbar__nav--items">
              <Link to="/careers" className="navbar__nav--link">
                Careers
              </Link>
            </li>
            <li className="navbar__nav--items">
              <Link to="/contact-us" className="navbar__nav--contact">
                contact us
              </Link>
            </li>
          </ul>
        </div>
        <button className="navbar__icon">
          {isMobile ? <p> X </p> : <p>O</p>}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;