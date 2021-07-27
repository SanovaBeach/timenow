import React from "react";
import Navbar from "../Navbar/Navbar";
import "./header.scss";
import mockup from "../../Assets/Mockup.png";
import check from "../../Assets/Checkmark.svg";

const Header = () => {
  return (
    <>
      {/* <Navbar /> */}
      <header className="Header container">
        <div className="Header_left">
          <section className="Header_card">
            <h1 className="Header_heading">
              Post when your audience is most active.
            </h1>
            <p className="Header_subheading">
              With TimeNow, automatically schedule your posts on Twitter,
              LinkedIn, and Instagram to post when your followers are most
              active.
            </p>
            <div className="Header_btnContainer">
              <button className="button-primary">Start Scheduling</button>
              <button className="Header_button">View Demo</button>
            </div>
            <p className="Header_subheading">
              <img src={check} alt="checkmark logo" className="Header_check" />
              TimeNow does not sell your data.{" "}
              <span className="Header_span">Learn more</span>
            </p>
          </section>
        </div>
        <div className="Header_right">
          <img src={mockup} alt="mock up" className="Header_image" />
        </div>
      </header>
    </>
  );
};

export default Header;
