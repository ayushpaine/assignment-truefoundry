import React from "react";
import { useState } from "react";
import List from "./List/List";
import "./Body.css";

const Body = () => {
  const array = JSON.parse(localStorage.getItem("Notes"));
  const [notes, setNotes] = useState(array ? array : []);

  console.log(array);

  return (
    <div className="body-wrapper">
      {notes.map((item) => {
        return <List id={item.id} title={item.title} tasks={item.tasks} />;
      })}
    </div>
  );
};

export default Body;
