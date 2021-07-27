import React from "react";
import "./plan.scss";

const Plan = () => {
  return (
    <>
      <div className="Plan">
        <h1 className="Plan_title">Flexible Plans for Everyone.</h1>
        <p className="Plan_desc">
          Our plans are made for everyone. Whether you're just starting out in
          social media, or have been on there for a long time, we have a plan
          that's right for you.
        </p>
        <div className="Plan_billContainer">
          <p className="Plan_bill">Billed Monthly</p>
          <button className="Plan_button"></button>
          <p className="Plan_bill">Billed Yearly</p>
        </div>
      </div>
    </>
  );
};

export default Plan;
