import React from "react";
import { Link } from "react-router-dom";
const Message = () => {
  return (
    <div className="home__message">
      <div className="home__message--title">
        <p>Kick-start Your</p>
        <p>Project Today!</p>
      </div>
      <div className="home__message--desc">
        Contact us now and get the consultation you need to succeed.
      </div>
      <Link to="/" className="home__message--button">
        message us
      </Link>
    </div>
  );
};

export default Message;
