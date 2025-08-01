import React from "react";

const Hero = () => {
  return (
    <div className="container" style={{margin: "0 auto"}}>
      <div className="row mt-5">
        <div className="row">
          <div className="text-center" style={{ padding: "100px 0px" }}>
            <h1 className="custom-h1">Charges</h1>
            <p className="subheading">List of all charges and taxes</p>
            <section className="row charges-section">
              <div className="col-4 four">
                <img src="media/images/pricingEquity.svg" />
                <h2 className="charges-banner-heading ">Free equity delivery</h2>
                <p className="text-gray">
                  All equity delivery investments (NSE, BSE), are absolutely
                  free — ₹ 0 brokerage.
                </p>
              </div>
              <div className="col-4 four">
                <img src="media/images/pricing-20.svg" />
                <h2 className="charges-banner-heading">Intraday and F&O trades</h2>
                <p className="text-gray">
                  Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                  intraday trades across equity, currency, and commodity trades.
                  Flat ₹20 on all option trades.
                </p>
              </div>
              <div className="col-4 four">
                <img src="media/images/pricingEquity.svg" />
                <h2 className="charges-banner-heading">Free direct MF</h2>
                <p className="text-gray">
                  All direct mutual fund investments are absolutely free — ₹ 0
                  commissions & DP charges.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
