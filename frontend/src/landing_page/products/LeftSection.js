import React from "react";

const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container">
      <div className="row" style={{ marginBottom: "6.4rem" }}>
        <div className="col-8 " style={{ padding: "3rem 8rem " }}>
          <img src={imageUrl} />
        </div>
        <div
          className="col-4"
          style={{ paddingRight: "6rem", marginTop: "6rem" }}
        >
          <h2 className="custom-h2">{productName}</h2>
          <p className="p-font mb-4">{productDescription}</p>
          <div className="mb-5">
            <a href={tryDemo} className="custom-a me-5">
              Try Demo <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href={learnMore} className="custom-a">
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div>
            <a href={googlePlay} className="me-3">
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
