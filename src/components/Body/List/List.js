import React, { useState, useEffect } from "react";
import "./List.css";
import Card from "./Card/Card";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Droppable } from "react-beautiful-dnd";

const List = ({ id, title, tasks, notes, setNotes }) => {
  const [addCard, setAddCard] = useState(true);
  const [cardMessage, setCardMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddCard(true);
    setCardMessage("");
    tasks.push({ id: new Date().valueOf(), message: cardMessage });
    setNotes((prev) =>
      prev.id === id ? [{ id: id, title: title, tasks: tasks }] : [...prev]
    );
  };

  const handleChange = (e) => {
    setCardMessage(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="list-wrapper">
      <div className="list-title">
        <h3 className="list-title-content">{title}</h3>
        <div className="ellipsis-icon">
          <MoreHorizIcon style={{ fontSize: "19px" }} />
        </div>
      </div>
      <Droppable droppableId={`${id}`}>
        {(provided) => (
          <div
            className="cards"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((item, index) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  index={index}
                  message={item.message}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {addCard ? (
        <div
          className="add-new-card-wrapper"
          onClick={() => {
            setAddCard(false);
          }}
        >
          <div className="add-icon">
            <AddIcon style={{ fontSize: "19px" }} />
          </div>
          Add a card
        </div>
      ) : (
        <div className="add-new-card">
          <form
            className="card-input-form"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              className="new-card-input"
              type="text"
              value={cardMessage}
              onChange={(e) => handleChange(e)}
              required
              placeholder="Enter a title for this card..."
              name="card-title"
            />
            <div className="new-card-button-wrapper">
              <input
                type="submit"
                className="add-new-card-button"
                value="Add card"
              />
              <div className="card-close-icon" onClick={() => setAddCard(true)}>
                <CloseIcon style={{ fontSize: 18 }} />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default List;
