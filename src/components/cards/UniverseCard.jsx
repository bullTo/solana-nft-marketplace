import React from "react";
// import "./universe-card.scss";
const UniverseCard = ({ cardInfo }) => {
  return (
    <div class="universe-card">
      <img src={cardInfo.icon} alt={cardInfo.name} class="image" />
      <div class="heading"></div>
    </div>
  );
};

export default UniverseCard;
