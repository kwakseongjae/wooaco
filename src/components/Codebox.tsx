import React from "react";
import LangSelectButton from "./LangSelectButton";
import CodeboxGrid from "./CodeboxGrid";
import CodeEditor from "./Code";
import useBearStore from "../store/store";

function Codebox() {
  const firstButtonValue = useBearStore((state) => state.firstButtonValue);
  return (
    <div className="codebox">
      <CodeboxGrid />
    </div>
  );
}

export default Codebox;
