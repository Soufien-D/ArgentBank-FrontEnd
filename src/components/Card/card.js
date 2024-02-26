import React from "react";
import "../../components/Card/card.scss";

function Card({ image, descriptionImage, title, description }) {
  return (
    <div className="card__item">
      <img src={image} alt={descriptionImage} className="card__item_icon" />
      <h3 className="card__item_title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
