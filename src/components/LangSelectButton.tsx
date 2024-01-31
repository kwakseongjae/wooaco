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

{
  /* <option value="1">
          <img
            src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg"
            alt="logo"
          />
          <p className="lang-btn">
            python
            <img src={arrowDown} alt="down" />
          </p>
        </option> */
}
export default LangSelectButton;
