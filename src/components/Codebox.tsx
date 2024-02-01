import React from "react";
import LangSelectButton from "./LangSelectButton";
import CodeboxGrid from "./CodeboxGrid";
import CodeEditor from "./Code";

function Codebox() {
  return (
    <>
      <div className="codebox">
        <LangSelectButton />
        <CodeboxGrid />
      </div>
    </>
  );
}

export default Codebox;
