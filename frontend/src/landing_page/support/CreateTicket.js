import React from "react";

const CreateTicket = () => {
  return (
    <div className="container">
      <div className="row pt-5 pb-5 ps-4 pe-4">
        <div className="col-8 d-flex flex-column gap-4">
          <div
            className="border d-flex flex-row align-items-center gap-3 scale-hover"
            style={{ height: "60px" }}
          >
            <div
              className="ps-4 pe-4 pt-3 pb-4"
              style={{
                color: "#387ed1",
                backgroundColor: "#f3f6f9ff",
                height: "100%",
              }}
            >
              <i class="fa-solid fa-circle-plus"></i>
            </div>
            <h2 className="sp-h2">Account Opening</h2>
            <div className="ms-auto me-3" style={{ color: "#387ed1" }}>
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>
          <div
            className="border d-flex flex-row align-items-center gap-3  scale-hover"
            style={{ height: "60px" }}
          >
            <div
              className="ps-4 pe-4 pt-3 pb-4"
              style={{
                color: "#387ed1",
                backgroundColor: "#f3f6f9ff",
                height: "100%",
              }}
            >
              <i class="fa-solid fa-circle-user"></i>
            </div>
            <h2 className="sp-h2">Your Tradenest Account</h2>
            <div className="ms-auto me-3" style={{ color: "#387ed1" }}>
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>
          <div
            className="border d-flex flex-row align-items-center gap-3  scale-hover"
            style={{ height: "60px" }}
          >
            <div
              className="ps-4 pe-4 pt-3 pb-4"
              style={{
                color: "#387ed1",
                backgroundColor: "#f3f6f9ff",
                height: "100%",
              }}
            >
              <i class="fa-solid fa-angle-up"></i>
            </div>
            <h2 className="sp-h2">Kite</h2>
            <div className="ms-auto me-3" style={{ color: "#387ed1" }}>
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>
          <div
            className="border d-flex flex-row align-items-center gap-3  scale-hover"
            style={{ height: "60px" }}
          >
            <div
              className="ps-4 pe-4 pt-3 pb-4"
              style={{
                color: "#387ed1",
                backgroundColor: "#f3f6f9ff",
                height: "100%",
              }}
            >
              <i class="fa-solid fa-circle-user"></i>
            </div>
            <h2 className="sp-h2">Funds</h2>
            <div className="ms-auto me-3" style={{ color: "#387ed1" }}>
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>
          <div
            className="border d-flex flex-row align-items-center gap-3  scale-hover"
            style={{ height: "60px" }}
          >
            <div
              className="ps-4 pe-4 pt-3 pb-4"
              style={{
                color: "#387ed1",
                backgroundColor: "#f3f6f9ff",
                height: "100%",
              }}
            >
              <i class="fa-solid fa-circle-user"></i>
            </div>
            <h2 className="sp-h2">Console</h2>
            <div className="ms-auto me-3" style={{ color: "#387ed1" }}>
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>
          <div
            className="border d-flex flex-row align-items-center gap-3  scale-hover"
            style={{ height: "60px" }}
          >
            <div
              className="ps-4 pe-4 pt-3 pb-4"
              style={{
                color: "#387ed1",
                backgroundColor: "#f3f6f9ff",
                height: "100%",
              }}
            >
              <i class="fa-solid fa-circle-user"></i>
            </div>
            <h2 className="sp-h2">Coin</h2>
            <div className="ms-auto me-3" style={{ color: "#387ed1" }}>
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>
        </div>
        <div className="col-4 ps-5 ">
          <div
            className="row"
            style={{
              backgroundColor: "#faf2e3ff",
              borderLeft: "0.5rem solid #eda91fff",
            }}
          >
            <ul className="ps-5 pt-4 pb-4 pe-5">
              <li className="mb-3 ms-3">
                <a href="#">
                  Exclusion of F&O contracts on 8 securities from August 29,
                  2025
                </a>
              </li>
              <li className=" ms-3">
                <a href="#">
                  Revision in expiry day of Index and Stock derivatives
                  contracts
                </a>
              </li>
            </ul>
          </div>
          <div className="row mt-3 d-flex flex-column ">
            <div
              className=" d-flex align-items-center"
              style={{ height: "3rem", backgroundColor: "#e1ebf5" }}
            >
              Quick links
            </div>
            <div
              className="border-bottom border-start border-end d-flex align-items-center"
              style={{ height: "3rem" }}
            >
              <a href="#" className="custom-a">
                1. Track account opening
              </a>
            </div>
            <div
              className="border-bottom border-start border-end d-flex align-items-center"
              style={{ height: "3rem" }}
            >
              <a href="#" className="custom-a">
                2. Track segment activation
              </a>
            </div>
            <div
              className="border-bottom border-start border-end d-flex align-items-center"
              style={{ height: "3rem" }}
            >
              <a href="#" className="custom-a">
                3. Intraday margins
              </a>
            </div>
            <div
              className="border-bottom border-start border-end d-flex align-items-center"
              style={{ height: "3rem" }}
            >
              <a href="#" className="custom-a">
                4. Kite user manual
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
