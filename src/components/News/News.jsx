import React from "react";
import "../../stylesheets/news.css";
import image1 from '../../assets/images/shri-vinai-kumar-saxena11.jpg'
import image2 from '../../assets/images/ms-atishi-cm.jpg'

function News() {
  const notifications = [
    {
      heading: "Meeting Notice",
      date: "05-09-2024",
    },
    {
      heading: "Meeting Notice",
      date: "05-09-2024",
    },
    {
      heading: "Meeting Notice",
      date: "05-09-2024",
    },
    {
      heading: "Meeting Notice",
      date: "05-09-2024",
    },
    {
      heading: "Meeting Notice",
      date: "05-09-2024",
    },
    {
      heading: "Meeting Notice",
      date: "05-09-2024",
    },
  ];
  return (
    <section id="news">
      <div className="container">
        <ul>
          {notifications.map(({ heading, date }, index) => {
            return (
              <li key={index}>
                <div>
                  <h4>{heading}</h4>
                  <p>{date}</p>
                </div>
                <button>View</button>
              </li>
            );
          })}
        </ul>

        <div className="cards">
          <div className="card">
            <div className="profile-photo">
              <img src={image2} alt="" />
            </div>
            <div>
              <p>Lieutenant Governor</p>
              <strong>Shri Vinai Kumar Saxena</strong>
            </div>
          </div>
          <div className="card">
            <div className="profile-photo">
              <img src={image1} alt="" />
            </div>
            <div>
              <p>Lieutenant Governor</p>
              <strong>Shri Vinai Kumar Saxena</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
