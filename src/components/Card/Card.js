import React from "react";
import "./card.scss";
import check from "../../Assets/Checkmark.svg";

const Card = ({ cardData }) => {
  return (
    <>
      <div className="Card">
        {cardData.map((card, index) => {
          const { bill, desc, details, label } = card;
          return (
            <section className="Card_content" key={index}>
              <h1 className="Card_price">
                {bill}
                <span className="Card_month">/mo</span>
              </h1>
              <p className="Card_desc">{desc}</p>
              <hr style={{ margin: "3rem 0" }} />
              <CardDetails label={label} details={details} />
              <button
                className="button-primary"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1.5rem",
                }}
              >
                {label}
              </button>
            </section>
          );
        })}
      </div>
    </>
  );
};

const CardDetails = ({ details, label }) => {
  return (
    <div className="Card_detailsContainer">
      {details.map((detail, index) => {
        const { icon, desc } = detail;
        return (
          <div className="Card_details" key={index}>
            <img src={icon} alt="" className="Card_image" />
            <span className="Card_desc">{desc}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
