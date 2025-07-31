import React from "react";

const Universe = () => {
  return (
    <div className="container">
      <div className="row text-center p-5">
        <h1 className="mt-5 custom-h1 mb-4">The TradeNest Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 ps-5 pe-5 pt-5">
          <img src="media/images/zerodhaFundhouse.png" style={{height: "40px"}}/>
          <p className="text-more-small  mt-4 ps-5  pe-5">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 ps-5 pe-5 pt-5">
          <img src="media/images/sensibullLogo.svg" style={{height: "40px"}}/>
          <p className="text-more-small mt-4 ps-5  pe-5">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 ps-5 pe-5 pt-5">
          <img src="media/images/tijori.svg" style={{height: "40px"}}/>
          <p className="text-more-small mt-4 ps-5  pe-5">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 ps-5 pe-5 pt-5">
          <img src="media/images/streakLogo.png" style={{height: "40px"}}/>
          <p className="text-more-small mt-4 ps-5  pe-5">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 ps-5 pe-5 pt-5">
          <img src="media/images/smallcaseLogo.png" style={{height: "50px"}}/>
          <p className="text-more-small mt-4 ps-5  pe-5">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 ps-5 pe-5 pt-5">
          <img src="media/images/dittoLogo.png" style={{height: "40px"}}/>
          <p className="text-more-small mt-4 ps-5  pe-5">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <button
          className="mt-4 mb-5 custom-btn"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Universe;
