import React from "react";

const ExpertAt = () => {
  const listExpertAts = [
    {
      id: 1,
      image:
        "https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-new-web.svg&w=32&q=100",
      title: "Web Development",
      description:
        "We use the best-in-class frameworks to build sites that work for your business.",
      status: true,
    },
    {
      id: 2,
      image:
        "https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-new-mobile.svg&w=32&q=100",
      title: "Mobile Development",
      description:
        "We enable you to work on the go with native and hybrid mobile development.",
      status: true,
    },
    {
      id: 3,
      image:
        "https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-new-design.svg&w=32&q=100",
      title: "UX/UI Design",
      description:
        "We solve your performance problems using human-centered design methods.",
      status: true,
    },
    {
      id: 4,
      image:
        "https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-new-qa.svg&w=32&q=100",
      title: "Quality Assurance",
      description:
        "We maximize the test coverage to deliver high-quality softwares.",
      status: true,
    },
    {
      id: 5,
      image:
        "https://fabatechnology.com/_next/image?url=%2Ficons%2Ficon-new-pm.svg&w=32&q=100",
      title: "Project Management",
      description:
        "No matter Agile or Waterfall, we make sure your project stays well-organized.",
      status: true,
    },
  ];
  let elements = listExpertAts.map((listExpertAt, index) => {
    let result = "";
    if (listExpertAt.status) {
      result = (
        <div key={index} className="expertat-content">
          <img
            src={listExpertAt.image}
            alt={listExpertAt.image}
            width="32px"
            height="32px"
            className="expertat-content--image"
          ></img>

          <div className="expertat-content--right">
            <div className="expertat-title">{listExpertAt.title}</div>
            <div className="expertat-desc">{listExpertAt.description}</div>
          </div>
        </div>
      );
    }
    return result;
  });
  return (
    <div className="home__expertat">
      <div className="home__expertat--title">What We Are Expert At</div>
      <div className="home__expertat--grid">{elements}</div>
    </div>
  );
};
export default ExpertAt;
