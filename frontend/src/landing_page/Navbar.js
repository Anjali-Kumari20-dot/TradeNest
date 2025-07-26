import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{ height: "70px", backgroundColor: "#fff" }}
      className="navbar navbar-expand-lg border-bottom"
    >
      <div class="container ps-5 pe-5" >
        <a class="navbar-brand" href="#">
          <img
            src="media/images/TradeNestLogo.png"
            className="img-fluid ms-5"
            style={{ width: "7%", marginRight: "-10px" }}
          />
          <img src="media/images/TradeNest.png" style={{ width: "18%" }} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link" href="#">
                  Support
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
