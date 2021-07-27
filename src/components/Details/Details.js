import React from "react";
import "./details.scss";
import UA1 from "../../Assets/UA1.png";
import UA2 from "../../Assets/UA2.png";
import UA3 from "../../Assets/UA3.png";
import UA4 from "../../Assets/UA4.png";
import UA5 from "../../Assets/UA5.png";
import UA6 from "../../Assets/UA6.png";
import UA7 from "../../Assets/UA7.png";
import UA8 from "../../Assets/UA8.png";

const images = [UA1, UA2, UA3, UA4, UA5, UA6, UA7, UA8];

const Details = () => {
  return (
    <>
      <div className="Details">
        <div className="Details_container container">
          <div className="Details_left">
            <section className="Details_card">
              <h1 className="Details_heading">
                TimeNow is used by the most influential people.
              </h1>
              <div className="Details_imgContainer">
                {images.map((image, index) => (
                  <img
                    src={image}
                    alt={`image ${index}`}
                    className="Details_image"
                    key={index}
                  />
                ))}
              </div>
            </section>
          </div>
          <div className="Details_right">
            <section className="Details_details">
              <p className="Details_desc">
                The most influential people on Facebook, Twitter, and Instagram
                are using TweetNow to schedule posts when their followers are
                most active.
              </p>
              <p className="Details_desc">
                They generally receive 23% more engagement than people who do
                not.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
