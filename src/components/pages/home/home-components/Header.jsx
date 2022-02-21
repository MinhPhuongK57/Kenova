import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="home__header">
        <img
          className="home__header--image"
          src="https://images.unsplash.com/photo-1546387903-6d82d96ccca6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          alt="https://images.unsplash.com/photo-1546387903-6d82d96ccca6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        />
        <div className="home__header--heading">
          <p>Build your</p>
          <p>Remote Team</p>
        </div>
        <div className="home__header--desc">
          <p>Let our outstanding tech talents give you more than</p>
          <p> just a helping hand</p>
        </div>
        <Link to="/" className="home__header--button">
          get started
        </Link>
      </div>
    </div>
  );
};

export default Header;
