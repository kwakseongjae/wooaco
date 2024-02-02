import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import arrowDown from "../assets/arrowdown.png";
import { ReactComponent as Edit } from "../assets/edit.svg";
import next from "../assets/next.png";
import useBearStore from "../store/store";

const codeString = `<div className="comment-info">
  <div className="author">hey_miss_true</div>
  <div className="comment">
    Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever
    since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book.
  </div>
  <div className="reply">답글 달기</div>
</div>`;

const selectList = [
  { value: "python", name: "Python" },
  { value: "javascript", name: "Javascript" },
  { value: "html", name: "HTML" },
  { value: "bash", name: "Bash" },
];

function CodeboxGrid() {
  const [content, setContent] = useState(codeString);
  const firstButtonValue = useBearStore((state) => state.firstButtonValue);
  const increaseFirstButtonValue = useBearStore(
    (state) => state.increaseFirstButton
  );
  const decreaseFirstButtonValue = useBearStore(
    (state) => state.decreaseFirstButton
  );

  function onChange(e: any) {
    setContent(e.target.value);
  }

  const [selected, setSelected] = useState("python");

  const handleSelect = (e: any) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <div className="lang-select">
        <p>언어는</p>
        <div className="selectBox">
          <select
            name="PL"
            className="select"
            onChange={handleSelect}
            value={selected}
          >
            {selectList.map((item) => {
              return (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <span className="icoArrow">
            <img src={arrowDown} alt="arrow" />
          </span>
        </div>
      </div>
      <div className="codebox-container">
        {firstButtonValue ? (
          <></>
        ) : (
          <div className="codebox-typing">
            <textarea onChange={onChange} />
          </div>
        )}

        <div
          className="codebox-result"
          style={firstButtonValue ? { width: "100%" } : {}}
        >
          {firstButtonValue ? (
            <div className="edit-box">
              <div></div>
              <button
                className="edit"
                onClick={() => decreaseFirstButtonValue()}
              >
                <p>수정하기</p>
                <Edit width="40%" height="100%" strokeWidth="0.5" />
              </button>
            </div>
          ) : (
            <></>
          )}
          <SyntaxHighlighter language={selected}>{content}</SyntaxHighlighter>
        </div>
      </div>
      {firstButtonValue ? (
        <></>
      ) : (
        <div className="next-btn">
          <button
            className="icon-button"
            onClick={() => increaseFirstButtonValue()}
          >
            <img src={next} alt="next" /> 다음
          </button>
        </div>
      )}
    </>
  );
}

export default CodeboxGrid;
