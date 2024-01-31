import React from "react";
import LangSelectButton from "./LangSelectButton";

function Codebox() {
  return (
    <>
      <div className="codebox">
        <LangSelectButton />
        <div className="codebox_grid">
          <div className="view-line-numbers">
            <div className="view-line-number">1</div>
            <div className="view-line-number">2</div>
            <div className="view-line-number">3</div>
            <div className="view-line-number">4</div>
            <div className="view-line-number">5</div>
          </div>
          <div className="view-lines">
            <div className="view-line">code</div>
            <div className="view-line">code</div>
            <div className="view-line">code</div>
            <div className="view-line">code</div>
            <div className="view-line">code</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Codebox;
