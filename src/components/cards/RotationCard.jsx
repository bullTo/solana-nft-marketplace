import React from "react";
import "./rotation-card.scss";
const RotationCard = ({ cardInfo }) => {
  return (
    <div className="rotation-card">
      <p className="heading">{cardInfo.name}</p>
      <img src={cardInfo.icon} width={100} alt="wallet" />
    </div>
  );
};

export default RotationCard;
