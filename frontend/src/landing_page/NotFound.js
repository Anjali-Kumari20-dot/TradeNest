import React from "react";

const NotFound = () => {
  return (
    <div
      className="container p-5 mb-5"
      style={{ width: "70%", margin: "0 auto" }}
    >
      <div className="row text-center">
        <h2 className="mt-5">404 Not Found</h2>
        <p className="p-font">
          Sorry, the page you are looking for does not exists.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
