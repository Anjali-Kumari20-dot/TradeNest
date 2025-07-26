import React from "react";

const Education = () => {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col mt-5">
          <img className="mt-5 p-5" src="media/images/education.svg" />
        </div>
        <div className="col mt-5 p-5">
          <h3 className="heading mt-5">Free and open market education</h3>
          <p className="mt-4 mb-4 fs-6">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="mx-1 mt-5 anchor-text" style={{ textDecoration: "none" }}>
            Varsity  <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mt-4 mb-4 fs-6">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" className="mx-1 anchor-text " style={{ textDecoration: "none" }}>
            TradingQ&A  <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
