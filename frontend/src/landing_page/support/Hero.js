import React from "react";

const Hero = () => {
  return (
    <div className="container-fluid bg-light" >
        <div className="container">
                <div className="row" style={{ marginTop: "4rem" }}>
          <div 
            style={{
              paddingLeft: "40px",
              paddingRight: "40px",
              paddingTop: "44px",
              paddingBottom: "25px",
            }}
          >
            <div className="d-flex flex-row justify-content-between align-items-center bd-highlight mb-3">
              <p
                className=""
                style={{
                  fontWeight: "bold",
                  color: "#424242",
                  fontSize: "2.3rem",
                }}
              >
                Support Portal
              </p>
              <button className="btn custom-btn">My Tickets</button>
            </div>
            <div
              className="search-box d-flex flex-row justify-content-start align-items-center w-100 border"
              style={{ height: "60px", padding: "0px 24px", backgroundColor: "white" }}
            >
              <i class="fa-solid fa-magnifying-glass"></i>
              <form class="form-inline w-100">
                <input
                  class="form-control border-0"
                  style={{ marginLeft: "0.5rem"}}
                  type="search"
                  placeholder="Eg: How do I open my account, How do i activate F&O..."
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
      </div>

        </div>
    </div>
  );
};

export default Hero;
