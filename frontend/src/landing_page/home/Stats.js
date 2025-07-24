import React from "react";

const Stats = () => {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h2 className="mb-5 fs-3">Trust with confidence</h2>
          <h4 className="fs-5 mt-5">Customer-first always</h4>
          <p className="mt-3 text-muted">
            That's why 1.6+ crore customers trust TradeNest with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h4 className="fs-5 mt-5">No spam or gimmicks</h4>
          <p className="mt-3 text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>

          <h4 className="fs-5 mt-5">The TradeNest universe</h4>
          <p className="mt-3 text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h4 className="fs-5 mt-5">Do better with money</h4>
          <p className="mt-3 text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 mt-3">
          <img src="media/images/ecosystem.png" className="mb-2" style={{ width: "95%" }} />
          <div className="text-center mt-5">
            <a href="" className="mx-5 fs-5" style={{textDecoration:"none"}}>
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="" className="fs-5" style={{textDecoration:"none"}}>
              Try Kite demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
