import React from "react";
import "./Card.css";
import { Draggable } from "react-beautiful-dnd";

const Card = ({ id, index, message }) => {
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          className="card-wrapper"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="card-message">{message}</div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
