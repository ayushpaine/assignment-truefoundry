import React, { useState, useEffect } from "react";
import "./List.css";
import Card from "./Card/Card";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const List = ({ id, title, tasks, notes, setNotes }) => {
  const [addCard, setAddCard] = useState(true);
  const [listTitle, setListTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddCard(true);
    setListTitle("");
    tasks.push({ id: new Date().valueOf(), message: listTitle });
    setNotes((prev) =>
      prev.id === id ? [{ id: id, title: title, tasks: tasks }] : [...prev]
    );
  };

  const handleChange = (e) => {
    setListTitle(e.target.value);
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
      {tasks.map((item) => {
        return <Card message={item.message} />;
      })}
      {addCard ? (
        <div className="list-new-card" onClick={() => setAddCard(false)}>
          <div className="add-icon">
            <AddIcon style={{ fontSize: "19px" }} />
          </div>
          Add a card
        </div>
      ) : (
        <div className="list-add-new-card">
          <form className="list-input-form" onSubmit={(e) => handleSubmit(e)}>
            <input
              className="list-new-card-input"
              type="text"
              value={listTitle}
              onChange={(e) => handleChange(e)}
              required
              placeholder="Enter a title for this card..."
              name="card-title"
            />
            <div className="list-new-button-wrapper">
              <input
                type="submit"
                className="list-add-new-button"
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
