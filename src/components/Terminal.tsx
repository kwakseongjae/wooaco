import React from "react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ReactComponent as Edit } from "../assets/edit.svg";
import next from "../assets/next.png";
import useBearStore from "../store/store";

const TERMINAL_CONTENT = "TERMINAL_CONTENT";

function Terminal() {
  const [content, setContent] = useState<string>(" ");
  const secondButtonValue = useBearStore((state) => state.secondButtonValue);
  const increaseSecondButtonValue = useBearStore(
    (state) => state.increaseSecondButton
  );
  const decreaseSecondButtonValue = useBearStore(
    (state) => state.decreaseSecondButton
  );

  function onChange(e: any) {
    setContent(e.target?.value);
  }

  const handleSubmit = () => {
    if (content) {
      localStorage.setItem(TERMINAL_CONTENT, content);
      increaseSecondButtonValue();
    }
  };

  return (
    <>
      <div className="codebox-container">
        {secondButtonValue ? null : (
          <div className="codebox-typing">
            <textarea onChange={onChange} />
          </div>
        )}

        <div
          className="codebox-result"
          style={secondButtonValue ? { width: "100%" } : {}}
        >
          {secondButtonValue ? (
            <div className="edit-box">
              <div></div>
              <button
                className="edit"
                onClick={() => decreaseSecondButtonValue()}
              >
                <p>수정하기</p>
                <Edit width="40%" height="100%" strokeWidth="0.5" />
              </button>
            </div>
          ) : (
            <></>
          )}
          <SyntaxHighlighter language="bash">{content}</SyntaxHighlighter>
        </div>
      </div>
      {secondButtonValue ? null : (
        <div className="next-btn">
          <button className="icon-button" onClick={handleSubmit}>
            <img src={next} alt="next" /> 다음
          </button>
        </div>
      )}
    </>
  );
}

export default Terminal;
