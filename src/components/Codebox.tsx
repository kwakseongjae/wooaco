import useButtonStore from "@store/buttonStore";
import usePostStore from "@store/postStore";
import LANGUAGE_LIST from "@assets/data/languageData";
import next from "@assets/img/next.png";
import edit from "@assets/img/edit.png";
import arrowDown from "@assets/img/arrowdown.png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function Codebox() {
  const firstButton = useButtonStore((state) => state.firstButton);
  const toggleFirstButton = useButtonStore((state) => state.toggleFirstButton);
  const lang = usePostStore((state) => state.lang);
  const code = usePostStore((state) => state.code);
  const setLang = usePostStore((state) => state.setLang);
  const setCode = usePostStore((state) => state.setCode);

  function onChange(e: any) {
    setCode(e.target.value);
  }

  const handleSelect = (e: any) => {
    setLang(e.target.value);
  };

  const handleSubmit = () => {
    toggleFirstButton();
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
            value={lang}
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
        {firstButton ? null : (
          <div className="codebox-typing">
            <textarea onChange={onChange} />
          </div>
        )}

        <div
          className="codebox-result"
          style={firstButton ? { width: "100%" } : {}}
        >
          {firstButton ? (
            <div className="edit-box">
              <div></div>
              <button className="edit" onClick={() => toggleFirstButton()}>
                <p>수정하기</p>
                <img src={edit} alt="edit" />
              </button>
            </div>
          ) : null}
          <SyntaxHighlighter language={lang}>{code}</SyntaxHighlighter>
        </div>
      </div>
      {firstButton ? (
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
