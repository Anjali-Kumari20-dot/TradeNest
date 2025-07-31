import React from "react";

const RightSection = ({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) => {
  return (
    <div className="container">
      <div className="row" >
        <div
          className="col-4"
          style={{ paddingLeft: "7rem", paddingTop: "12rem" , paddingBottom: "1rem" }}
        >
          <h2 className="custom-h2">{productName}</h2>
          <p className="p-font mb-4">{productDescription}</p>
          <div className="mb-5">
            <a href={learnMore} className="custom-a">
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-8 " >
          <img src={imageUrl} style={{width: "100%" , maxWidth: "600px", height:"auto", marginLeft: "7rem", marginTop: "3rem"}}/>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
