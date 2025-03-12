import React from "react";
import "./sellandbuycard.scss";
const SellAndBuyCard = ({ cardInfo }) => {
  return (
    <div>
      <div class="e-card playing">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>

        <div class="infotop">
          <img src={cardInfo.image} alt="icon" />
          <br />
          <h4>{cardInfo.title}</h4>
          <p>{cardInfo.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SellAndBuyCard;
