import React from "react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function Terminal() {
  const [content, setContent] = useState(" ");
  function onChange(e: any) {
    setContent(e.target?.value);
  }

  return (
    <div className="codebox-container">
      <div className="codebox-typing">
        <textarea onChange={onChange} />
      </div>
      <div className="codebox-result">
        <SyntaxHighlighter language="bash">{content}</SyntaxHighlighter>
      </div>
    </div>
  );
}

export default Terminal;
