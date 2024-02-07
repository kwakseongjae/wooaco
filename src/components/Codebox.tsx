import { useState } from "react";
import useButtonStore from "@store/buttonStore";
import LANGUAGE_LIST from "@assets/data/languageData";
import next from "@assets/next.png";
import edit from "@assets/edit.png";
import arrowDown from "@assets/arrowdown.png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CODE_CONTENT = "CODE_CONTENT";

function Codebox() {
  const [content, setContent] = useState<string>(" ");
  const [selected, setSelected] = useState("python");
  const firstButtonValue = useButtonStore((state) => state.firstButtonValue);
  const increaseFirstButtonValue = useButtonStore(
    (state) => state.increaseFirstButton
  );
  const decreaseFirstButtonValue = useButtonStore(
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
    <div className="codebox">
      <div className="lang-select">
        <p>언어는</p>
        <div className="selectBox">
          <select
            name="lang"
            className="select"
            onChange={handleSelect}
            value={selected}
          >
            {LANGUAGE_LIST.map((item) => {
              return (
                <option key={item.id} value={item.value}>
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
                <img src={edit} alt="edit" />
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
    </div>
  );
}

export default Codebox;
