import React from "react";
import Plan from "../Plan/Plan";
import Card from "../Card/Card";
import "./pricing.scss";
import { cardData } from "../Card/cardData";

const Pricing = () => {
  return (
    <>
      <div className="Pricing">
        <div className="Pricing_container container">
          <Plan />
          <Card cardData={cardData} />
        </div>
      </div>
    </>
  );
};

export default Pricing;
