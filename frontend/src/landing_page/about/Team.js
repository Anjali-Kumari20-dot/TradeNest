import React from "react";

const Team = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center mb-5">People </h2>
        <div className="col-6 p-5">
          <img
            src="media/images/AnjaliKumari.JPG"
            style={{ borderRadius: "100%", width: "52%", marginLeft: "14rem" }}
          />
          <div style={{marginLeft: "8rem"}}>
            <h4 className="text-center mt-5">Anjali Kumari</h4>
            <p className="text-center mt-3 p-font"> Founder, CEO</p>
          </div>
        </div>
        <div className="col-6 p-5 ">
          <p className="px-4 py-1 lh-4 p-font">
            Anjali bootstrapped and founded TradeNest in 2***5 to overcome the
            hurdles she faced during her decade long stint as a trader. Today,
            TradeNest has changed the landscape of the Indian broking industry.
          </p>
          <p className="px-4 py-1 lh-4 p-font">
            She is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="px-4 py-1 lh-4 p-font">
            Playing basketball is her zen.
          </p>
          <p className="px-4 py-1 lh-4 p-font">
            Connect on{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
