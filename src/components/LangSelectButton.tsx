import React from "react";

import arrowDown from "../assets/arrowdown.png";

function LangSelectButton() {
  return (
    <div className="selectBox">
      <select name="PL" className="select">
        <option value="Python">Python</option>
        <option value="Javascript">Javascript</option>
      </select>
      <span className="icoArrow">
        <img src={arrowDown} alt="arrow" />
      </span>
    </div>
  );
}

export default LangSelectButton;
