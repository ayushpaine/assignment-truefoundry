import React from "react";
import "./Card.css";

const Card = ({ message }) => {
  return (
    <div className="card-wrapper">
      <div className="card-message">{message}</div>
    </div>
  );
};

export default Card;
