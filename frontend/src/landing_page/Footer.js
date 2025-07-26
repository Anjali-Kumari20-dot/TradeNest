import React from "react";

const Footer = () => {
  return (
    <footer className="border-top" style={{ backgroundColor: "#fbfbfb" }}>
      <div className="container" >
        <div className="row">
          <div className="col-4 mt-n4">
            <img
              src="media/images/TradeNestLogo.png"
              className="img-fluid ms-4"
              style={{ width: "20%", marginRight: "-10px" }}
            />
            <img src="media/images/TradeNest.png" style={{ width: "40%" }} />
            <p
              style={{
                color: "#666",
                fontSize: "14px",
                marginLeft: "3rem",
                marginRight: "1rem",
                marginTop: "-3rem"
              }}
            >
              &copy; 2010 - 2025, TradeNest Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col-2 mt-4-5">
            <h5>Company</h5>
            <a href="#">Minor demat account</a>
            <br />
            <a href="#">Open demat account</a>
            <br />
            <a href="#">NRI demat account</a>
            <br />
            <a href="#">Commodity</a>
            <br />
            <a href="#">Dematerialisation</a>
            <br />
            <a href="#">Fund transfer</a>
            <br />
            <a href="#">MTF</a>
            <br />
            <a href="#">Referral program</a>
            <br />
          </div>
          <div className="col-2  mt-4-5">
            <h5>Support</h5>
            <a href="#">Contact us</a>
            <br />
            <a href="#">Support portal</a>
            <br />
            <a href="#">How to file a complaint?</a>
            <br />
            <a href="#">Status of your complaints</a>
            <br />
            <a href="#">Bulletin</a>
            <br />
            <a href="#">Circular</a>
            <br />
            <a href="#">Z-Connect blog</a>
            <br />
            <a href="#">Downloads</a>
            <br />
          </div>
          <div className="col-2 mt-4-5">
            <h5>Account</h5>
            <a href="#">About</a>
            <br />
            <a href="#">Philosophy</a>
            <br />
            <a href="#">Press & media</a>
            <br />
            <a href="#">Careers</a>
            <br />
            <a href="#">TradeNest Cares (CSR)</a>
            <br />
            <a href="#">TradeNest.tech</a>
            <br />
            <a href="#">Open source</a>
            <br />
          </div>
          <div className="col-2 mt-4-5">
            <h5>Quick Links</h5>
            <a href="#">Upcoming IPOs</a>
            <br />
            <a href="#">Brokerage charges</a>
            <br />
            <a href="#">Market holidays</a>
            <br />
            <a href="#">Economic calendar</a>
            <br />
            <a href="#">Calculators</a>
            <br />
            <a href="#">Markets</a>
            <br />
            <a href="#">Sectors</a>
            <br />
          </div>
        </div>

        <div className="row text-more-small text-muted p-5">
          <div mt-5>
            <p>
              TradeNest Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through TradeNest Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through TradeNest Commodities Pvt.
              Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238
              Registered Address: TradeNest Broking Ltd., #153/154, 4th Cross,
              Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to
              complaints@TradeNest.com, for DP related to dp@TradeNest.com. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>

            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>

            <p>
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </p>

            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>

            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>

            <p>
              India's largest broker based on networth as per NSE. NSE broker
              factsheet
            </p>

            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of TradeNest and offering such
              services, please create a ticket here.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
