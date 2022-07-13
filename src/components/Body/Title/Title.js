import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./Title.css";

const Title = () => {
  return (
    <>
      <div className="title-wrapper">
        <div className="title-name">Kanban Board</div>
        <div className="title-button">
          <div className="icon-star-container">
            <div className="icon-star">
              <StarBorderIcon style={{ fontSize: "15px" }} />
            </div>
          </div>
        </div>
        <div className="title-content-separator" />
        <button className="public-button">
          <img
            className="world-icon"
            src="https://trello-replica.web.app/static/media/earth_white.b0d834ac.svg"
          />
          <div className="public-button-text">Public</div>
        </button>
        <div className="title-content-separator" />
        <div className="title-avatar">AH</div>
      </div>
    </>
  );
};

export default Title;
