import React from "react";
import img from "../assets/images/social_welfare.png";

function SocialWelfare() {
  return (
    <section id="social-welfare">
      <div className="container flex">
        <div>
          <h2>Welcome to Department of Social Welfare</h2>
          <p>
          The Department of Social Welfare provides welfare programmes and services to the Persons with Disabilities, social security for the aged and destitute through the network of residential care homes and non-institutional services. Besides this the Department also provides avenues of Persons with Disabilities and creates awareness amongst general public regarding the welfare measures of the Department.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            nulla laudantium, doloribus nesciunt, ipsa iste non assumenda,
            distinctio corporis id ducimus quam. Libero rem quas, pariatur
            dolore ab adipisci quidem.
          </p>

          <button className="btn primary">Know More</button>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
}

export default SocialWelfare;
