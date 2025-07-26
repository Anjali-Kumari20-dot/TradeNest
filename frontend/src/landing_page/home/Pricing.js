import React from "react";

const Pricing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h2 className="mb-4">Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="" className=" fs-5 mr-2" style={{ textDecoration: "none" }}>
            See Pricing
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">

            <div className="col d-flex align-items-end">
              <img style={{width : "65%"}} src="media/images/pricing0.svg" />
              <p className="custom-text text-muted ms-0 mb-0">Free account opening</p>
            </div>

            <div className="col d-flex align-items-end">
              <img style={{width : "65%"}} src="media/images/pricing0.svg" />
              <p className="custom-text text-muted ms-0 mb-0">Free equity delivery and direct mutual funds</p>
            </div>

            <div className="col d-flex align-items-end">
              <img style={{width : "65%"}} src="media/images/pricing-20.svg" />
              <p className="custom-text text-muted  ms-0 mb-0">Intraday and F&O</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
