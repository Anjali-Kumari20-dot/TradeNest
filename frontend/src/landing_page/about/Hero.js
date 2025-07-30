import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row custom-mt p-5 mb-5">
        <h2 className="fs-4 fw-semibold text-center ">
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h2>
      </div>
      <div className="row p-5 mt-5 border-top">
        <div className="col-6 p-5">
          <p className="px-4 py-1 lh-4 p-font">
            A fusion of high-stakes ambition and pure market mischief, TradeNest
            was born not from ancient philosophy, but from one trader’s
            relentless quest for sanity in the chaos. Forget Zero and Rodha—this
            is TradeNest: where trading feels less like solving riddles and more
            like having a cheat code to the market.
          </p>
          <p className="px-4 py-1 lh-4 p-font">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="px-4 py-1 lh-4 p-font">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6 p-5">
          <p className="px-4 py-1 lh-4  text p-font">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="px-4 py-1 lh-4 p-font">
            <a href="#" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p className="px-4 py-1 lh-4 p-font">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              blog
            </a>{" "}
            or see what the media is{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              saying about us
            </a>{" "}
            or learn more about our business and product{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              philosophies
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
