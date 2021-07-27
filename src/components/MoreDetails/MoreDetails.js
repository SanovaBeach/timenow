import React from "react";
import "./moreDetails.scss";

const MoreDetails = () => {
  return (
    <>
      <div className="More">
        <div className="More_container container">
          <section className="More_left">
            <section className="More_card">
              <p className="More_subheading">Unified Dashboard</p>
              <h1 className="More_heading">
                Customizable dashboard for all platforms.
              </h1>
              <p className="More_desc">
                Use Twitter and Instagram but not LinkedIn? You can customize
                your dashboard to your liking. You can even schedule the same
                post to individual platforms instead of all platforms.
              </p>
              <button className="button-primary">Start Scheduling</button>
            </section>
          </section>
          <section className="More_right">
            <section className="More_card">
              <p className="More_subheading">Enhanced Analytics</p>
              <h1 className="More_heading">
                Real-time data that tells you everything.
              </h1>
              <p className="More_desc">
                Get detail reports of what's working and what isn't. Engagement
                rates, impression, views, and much more data is available to you
                through our in-depth dashboard tool.
              </p>
              <button className="More_button">View Live Demo ></button>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default MoreDetails;
