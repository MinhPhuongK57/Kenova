import React from "react";

const Achievements = () => {
  const listAchievements = [
    {
      id: 1,
      title: "aws",
      desc: "certified",
      content: "Developer",
      rank: "Associate",
      status: true,
    },
    {
      id: 2,
      title: "aws",
      desc: "certified",
      content: "Data Analytics",
      rank: "Associate",
      status: true,
    },
    {
      id: 3,
      title: "aws",
      desc: "certified",
      content: "Solution Architect",
      rank: "Associate",
      status: true,
    },
    {
      id: 4,
      title: "aws",
      desc: "certified",
      content: "Solution Architect",
      rank: "Associate",
      status: true,
    },
    {
      id: 5,
      title: "aws",
      desc: "certified",
      content: "Solution Architect",
      rank: "Associate",
      status: true,
    },
    {
      id: 6,
      title: "aws",
      desc: "certified",
      content: "SysOps Administrator",
      rank: "Associate",
      status: true,
    },
    {
      id: 7,
      title: "aws",
      desc: "certified",
      content: "SysOps Administrator",
      rank: "Associate",
      status: true,
    },
  ];
  let elements = listAchievements.map((listAchievement, index) => {
    let result = "";
    if (listAchievement.status) {
      result = (
        <div key={index} className="achievement-item">
          <p className="achievement-item--title">
            {listAchievement.title} <span>&#10003;</span>
          </p>
          <p className="achievement-item--desc">{listAchievement.desc}</p>
          <p className="achievement-item--content">{listAchievement.content}</p>
          <p className="achievement-item--rank">{listAchievement.rank}</p>
        </div>
      );
    }
    return result;
  });
  return (
    <section
      className="home__achievement wow animate__fadeInUp container__padding"
      data-wow-duration="0.8s"
      data-wow-delay="0.3s"
    >
      <div className="home__achievement--title">
        <div></div>
        <h4>Our Awards & Achievements</h4>
      </div>
      <div className="home__achievement--items">{elements}</div>
    </section>
  );
};

export default Achievements;
