import React from "react";
import { useState, useEffect, useRef } from "react";
import List from "./List/List";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import "./Body.css";
import { DragDropContext } from "react-beautiful-dnd";
import { extractTasksArray } from "../../helpers/extractTasksArray";
import { extractList } from "../../helpers/extractList";

const Body = () => {
  const array = JSON.parse(localStorage.getItem("Notes"));
  const [notes, setNotes] = useState(array ? array : []);
  const [addList, setAddList] = useState(true);
  const [listTitle, setListTitle] = useState("");
  const clickRef = useRef(null);

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

  const clickToPos = () => {
    clickRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    console.log(result);

    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }

    if (source.droppableId !== destination.droppableId) {
      let currentList = extractList(notes, source);
      let destList = extractList(notes, destination);
      let currentTasks = extractTasksArray(currentList);
      let destTasks = extractTasksArray(destList);
      let currentCard = currentTasks[source.index];

      currentTasks.splice(source.index, 1);
      destTasks.splice(destination.index, 0, currentCard);

      setNotes((prev) =>
        prev.id === source.droppableId
          ? [
              {
                id: source.droppableId,
                title: currentList.title,
                tasks: currentTasks,
              },
            ]
          : prev.id === destination.droppableId
          ? [
              {
                id: destination.droppableId,
                title: destList.title,
                tasks: destTasks,
              },
            ]
          : [...prev]
      );
    }

    if (source.droppableId === destination.droppableId) {
      let currentList = extractList(notes, source);
      let currentTasks = extractTasksArray(currentList);
      let currentCard = currentTasks[source.index];

      currentTasks.splice(source.index, 1);
      currentTasks.splice(destination.index, 0, currentCard);

      setNotes((prev) =>
        prev.id === source.droppableId
          ? [
              {
                id: source.droppableId,
                title: currentList.title,
                tasks: currentTasks,
              },
            ]
          : [...prev]
      );
    }
  };

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="body-wrapper">
        {notes.length !== 0 &&
          notes.map((item) => {
            return (
              <List
                key={item.id}
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
            ref={clickRef}
            onClick={() => {
              setAddList(false);
              clickToPos();
            }}
          >
            <div className="add-list-content">
              <AddIcon style={{ fontSize: "18px" }} />
              Add another list
            </div>
          </div>
        ) : (
          <div className="add-new-list">
            <form
              className="list-input-form"
              onSubmit={(e) => {
                handleSubmit(e);
                clickToPos();
              }}
            >
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
                <div
                  className="card-close-icon"
                  onClick={() => setAddList(true)}
                >
                  <CloseIcon style={{ fontSize: 18 }} />
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </DragDropContext>
  );
};

export default Body;
