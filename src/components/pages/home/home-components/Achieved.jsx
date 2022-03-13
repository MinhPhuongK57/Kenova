import React from "react";
import { Link } from "react-router-dom";
const Achieved = () => {
  const listAchieveds = [
    {
      id: 1,
      image:
        "https://fabatechnology.com/_next/image?url=https%3A%2F%2Fapi.fabatechnology.com%2Fuploads%2Fpulse_thumbnail_3a04c9f6cf.png&w=1920&q=100",
      title: "PulseMS",
      description:
        "By constructing an all-in-one project management system, FABA dedicated team has helped Pulse allow its users to accomplish more with less time and",
      status: true,
    },
    {
      id: 2,
      image:
        "https://fabatechnology.com/_next/image?url=https%3A%2F%2Fapi.fabatechnology.com%2Fuploads%2Fqualee_thumbnail_75c90e1040.png&w=1920&q=100",
      title: "Qualee",
      description:
        "By providing both cloud optimization and offshore service, FABA has supported Qualee to empower their talents with customized onboarding",
      status: true,
    },
    {
      id: 3,
      image:
        "https://fabatechnology.com/_next/image?url=https%3A%2F%2Fapi.fabatechnology.com%2Fuploads%2Fcti_thumbnail_2_644b68b994.png&w=1920&q=100",
      title: "CTI",
      description:
        "With the help of FABA, CTI has efficiently improved its SEO, providing users a more approachable information portal for home care hospital services.",
      status: true,
    },
    {
      id: 4,
      image:
        "https://fabatechnology.com/_next/image?url=https%3A%2F%2Fapi.fabatechnology.com%2Fuploads%2Fartwallst_thumnail_60a0205204.png&w=1920&q=100",
      title: "ArtWallSt",
      description:
        "With a dedicated team, FABA Technology has supported ArtWallStreet leverage from a small digital art mall into a full-fledged platform, where",
      status: true,
    },
  ];
  let elements = listAchieveds.map((listAchieved, index) => {
    let result = "";
    if (listAchieved.status) {
      result = (
        <div key={index} className="achieved-content">
          <Link to="/cases" className="achieved-content--image">
            <img
              src={listAchieved.image}
              alt={listAchieved.image}
              className="wow animate__fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.4s"
            ></img>
          </Link>
          <Link
            to="/cases"
            className="achieved-content--title wow animate__fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.3s"
          >
            {listAchieved.title}
          </Link>
          <div
            className="achieved-content--desc wow animate__fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.3s"
          >
            {listAchieved.description}
          </div>
        </div>
      );
    }
    return result;
  });
  return (
    <section className="home__achieved container__padding">
      <div
        className="home__achieved--heading wow animate__fadeInUp"
        data-wow-duration="0.8s"
        data-wow-delay="0.3s"
      >
        <Link to="/cases" className="achieved-title">
          What We Achieved
          <img
            src="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-arrow-right-big.svg&w=32&q=100"
            alt="https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-arrow-right-big.svg&w=32&q=100"
          />
        </Link>
        <Link to="/cases" className="achieved-button">
          learn more
        </Link>
      </div>
      <div className="home__achieved--grid">{elements}</div>
    </section>
  );
};

export default Achieved;
