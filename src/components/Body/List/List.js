import React from "react";
import "./List.css";
import Card from "./Card/Card";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";

const List = ({ title, tasks }) => {
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
      <div className="list-new-card">
        <div className="add-icon">
          <AddIcon style={{ fontSize: "19px" }} />
        </div>
        Add a card
      </div>
    </div>
  );
};

export default List;
