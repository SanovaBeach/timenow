import React from "react";
import "./plan.scss";

const Plan = ({ rounded = false, isToggled, onToggle }) => {
  return (
    <>
      <div className="Plan">
        <h1 className="Plan_title">Flexible Plans for Everyone.</h1>
        <p className="Plan_desc">
          Our plans are made for everyone. Whether you're just starting out in
          social media, or have been on there for a long time, we have a plan
          that's right for you.
        </p>
        {/* Toggle */}
        <div className="Plan_billContainer">
          <p
            className={"Plan_bill"}
            style={
              isToggled ? { fontWeight: "normal" } : { fontWeight: "bold" }
            }
          >
            Billed Monthly
          </p>
          <label className="Plan_label">
            <input
              type="checkbox"
              className="Plan_input"
              checked={isToggled}
              onChange={onToggle}
            />
            <span className={`Plan_slider ${rounded ? "rounded" : ""}`} />
          </label>
          <p
            className="Plan_bill"
            style={
              isToggled ? { fontWeight: "bold" } : { fontWeight: "normal" }
            }
          >
            Billed Yearly
          </p>
        </div>
      </div>
    </>
  );
};

export default Plan;
