import React from "react";

const Hero = () => {
  return (
    <div 
      className="container p-5 mb-5"
      style={{width: "70%", margin: "0 auto"}}  
    >
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h2 className="mt-5">Invest in everything</h2>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          className="p-2 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          SignUp Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
