import React from "react";
import { Link } from "react-router-dom";
const Company = () => {
  const listCompanies = [
    {
      id: 1,
      image:
        "https://fabatechnology.com/_next/image?url=%2Fhome-page%2Flogo-companies%2Fartbeat.png&w=256&q=100",
      status: true,
    },
    {
      id: 2,
      image:
        "https://fabatechnology.com/_next/image?url=%2Fhome-page%2Flogo-companies%2Fpulse.png&w=256&q=100",
      status: true,
    },
    {
      id: 3,
      image:
        "https://fabatechnology.com/_next/image?url=%2Fhome-page%2Flogo-companies%2Foperation-viettel.png&w=256&q=100",
      status: true,
    },
    {
      id: 4,
      image:
        "https://fabatechnology.com/_next/image?url=%2Fhome-page%2Flogo-companies%2Fcare.png&w=256&q=100",
      status: true,
    },
    {
      id: 5,
      image:
        "https://fabatechnology.com/_next/image?url=%2Fhome-page%2Flogo-companies%2Fqualee.png&w=256&q=100",
      status: true,
    },
    {
      id: 6,
      image:
        "https://fabatechnology.com/_next/image?url=%2Fhome-page%2Flogo-companies%2Free.png&w=256&q=100",
      status: true,
    },
    {
      id: 7,
      image:
        "https://fabatechnology.com/_next/image?url=%2Fhome-page%2Flogo-companies%2Fqode.png&w=256&q=100",
      status: true,
    },
    {
      id: 8,
      image:
        "https://fabatechnology.com/_next/image?url=%2Fhome-page%2Flogo-companies%2Foperation-artwall.png&w=256&q=100",
      status: true,
    },
  ];
  let elements = listCompanies.map((listCompany, index) => {
    let result = "";
    if (listCompany.status) {
      result = (
        <img
          key={index}
          src={listCompany.image}
          alt={listCompany.image}
          className="company-content"
        ></img>
      );
    }
    return result;
  });
  return (
    <div className="home__company">
      <div className="home__company--grid">{elements}</div>
    </div>
  );
};

export default Company;
