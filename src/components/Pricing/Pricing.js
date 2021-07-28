import React, { useState } from "react";
import Plan from "../Plan/Plan";
import Card from "../Card/Card";
import "./pricing.scss";
import { cardData } from "../Card/cardData";

const Pricing = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <div className="Pricing">
        <div className="Pricing_container container">
          <Plan
            rounded={true}
            isToggled={isToggled}
            onToggle={() => setIsToggled(!isToggled)}
          />
          <Card isToggled={isToggled} cardData={cardData} />
        </div>
      </div>
    </>
  );
};

export default Pricing;
