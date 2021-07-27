import React from "react";
import "./footer.scss";
import logo from "../../Assets/Logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="Footer">
        <div className="Footer_container container">
          <img src={logo} alt="lofo" className="Footer_logo" />
          <section className="Footer_left">
            <section className="Footer_card">
              <p className="Footer_title">Product</p>
              <ul className="Footer_links">
                <li className="Footer_item">Homepage</li>
                <li className="Footer_item">Pricing</li>
                <li className="Footer_item">Features</li>
              </ul>
            </section>
            <section className="Footer_card">
              <p className="Footer_title">Help</p>
              <ul className="Footer_links">
                <li className="Footer_item">Live Chat</li>
                <li className="Footer_item">Send Email</li>
                <li className="Footer_item">FAQs</li>
              </ul>
            </section>
            <section className="Footer_card">
              <p className="Footer_title">Company</p>
              <ul className="Footer_links">
                <li className="Footer_item">About</li>
                <li className="Footer_item">Customers</li>
                <li className="Footer_item">Blog</li>
              </ul>
            </section>
          </section>
          <section className="Footer_right">
            <section className="Footer_cta">
              <p className="Footer_title">Try TweetNow</p>
              <div className="Footer_ctaContainer">
                <input
                  placeholder="Email Address"
                  type="email"
                  className="Footer_input"
                />
                <button className="button-primary">Start Scheduling</button>
              </div>
            </section>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
