import React from "react";
import Sidebar from "../Sidebar";
import "./HeaderBottom.css";

const HeaderBottom = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="header-bottom-wrapper">
          <div className="content">
            <img
              className="world-icon"
              src="https://trello-replica.web.app/static/media/earth_green.f5dba22e.svg"
            />
            <div className="info">
              This board is set to public. Board admins can change its
              visibility setting at any time.
            </div>
            <div className="more-info">Learn more here</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBottom;
