import React from "react";
import { useState, useEffect } from "react";
import List from "./List/List";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import "./Body.css";

const Body = () => {
  const array = JSON.parse(localStorage.getItem("Notes"));
  const [notes, setNotes] = useState(array ? array : []);

  const [addList, setAddList] = useState(true);
  const [listTitle, setListTitle] = useState("");

  console.log(array);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddList(true);
    setListTitle("");
    setNotes((prev) => [
      ...prev,
      { id: new Date().valueOf(), tasks: [], title: listTitle },
    ]);
  };

  const handleChange = (e) => {
    setListTitle(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="body-wrapper">
      {notes.length !== 0 &&
        notes.map((item) => {
          return (
            <List
              id={item.id}
              title={item.title}
              tasks={item.tasks}
              notes={notes}
              setNotes={setNotes}
            />
          );
        })}
      {addList ? (
        <div
          className="add-list-wrapper"
          onClick={() => {
            setAddList(false);
          }}
        >
          <div className="add-list-content">
            <AddIcon style={{ fontSize: "18px" }} />
            Add another list
          </div>
        </div>
      ) : (
        <div className="add-new-list">
          <form className="list-input-form" onSubmit={(e) => handleSubmit(e)}>
            <input
              className="new-list-input"
              type="text"
              value={listTitle}
              onChange={(e) => handleChange(e)}
              required
              placeholder="Enter list title..."
              name="list-title"
            />
            <div className="new-list-button-wrapper">
              <input
                type="submit"
                className="add-new-list-button"
                value="Add list"
              />
              <div className="card-close-icon" onClick={() => setAddList(true)}>
                <CloseIcon style={{ fontSize: 18 }} />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Body;
