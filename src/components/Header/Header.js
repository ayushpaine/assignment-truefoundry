import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <div>
          <HeaderTop />
        </div>
        <div>
          <HeaderBottom />
        </div>
      </div>
    </>
  );
};

export default Header;
