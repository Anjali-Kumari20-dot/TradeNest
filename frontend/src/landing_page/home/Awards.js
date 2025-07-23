import React from "react";

const Awards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media\images\largestBroker.svg" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h2 className="mb-4">Largest stock broker in India</h2>
          <p className="mb-5 mt-2">
            📈 TradeNest is your gateway to smart investing, turning fragmented
            market data into clear insights. 💡 Whether you're into stocks,
            mutual funds, or derivatives—TradeNest makes strategy simple and
            powerful.
          </p>
          <div className="row">
            <div className="col-6 ">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" style={{width: "90%"}} className="mt-3" />
        </div>
      </div>
    </div>
  );
};

export default Awards;
