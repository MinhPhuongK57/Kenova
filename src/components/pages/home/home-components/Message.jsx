import React from "react";
import { Link } from "react-router-dom";
const Message = () => {
  return (
    <div className="home__message message__body">
      <div
        className="home__message--title wow animate__fadeInUp"
        data-wow-duration="0.8s"
        data-wow-delay="0.3s"
      >
        <p>Kick-start Your</p>
        <p>Project Today!</p>
      </div>
      <div
        className="home__message--desc wow animate__fadeInUp"
        data-wow-duration="0.8s"
        data-wow-delay="0.3s"
      >
        Contact us now and get the consultation you need to succeed.
      </div>
      <Link
        to="/"
        className="home__message--button wow animate__fadeInUp"
        data-wow-duration="0.8s"
        data-wow-delay="0.3s"
      >
        message us
      </Link>
    </div>
  );
};

export default Message;
