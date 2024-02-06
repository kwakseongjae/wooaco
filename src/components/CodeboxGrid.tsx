import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import arrowDown from "../assets/arrowdown.png";
import { ReactComponent as Edit } from "../assets/edit.svg";
import next from "../assets/next.png";
import useBearStore from "../store/store";

const CODE_CONTENT = "CODE_CONTENT";

const selectList = [
  { value: "python", name: "Python" },
  { value: "javascript", name: "Javascript" },
  { value: "html", name: "HTML" },
  { value: "bash", name: "Bash" },
];

function CodeboxGrid() {
  const [content, setContent] = useState<string>(" ");
  const [selected, setSelected] = useState("python");
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

  const handleSelect = (e: any) => {
    setSelected(e.target.value);
  };

  const handleSubmit = () => {
    if (content) {
      localStorage.setItem(CODE_CONTENT, content);
      increaseFirstButtonValue();
    }
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
        {firstButtonValue ? null : (
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
          ) : null}
          <SyntaxHighlighter language={selected}>{content}</SyntaxHighlighter>
        </div>
      </div>
      {firstButtonValue ? (
        <></>
      ) : (
        <div className="next-btn">
          <button className="icon-button" onClick={handleSubmit}>
            <img src={next} alt="next" /> 다음
          </button>
        </div>
      )}
    </>
  );
}

export default CodeboxGrid;
