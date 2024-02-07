import useButtonStore from "@store/buttonStore";
import usePostStore from "@store/postStore";
import next from "@assets/img/next.png";
import edit from "@assets/img/edit.png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function Terminal() {
  const secondButton = useButtonStore((state) => state.secondButton);
  const toggleSecondButton = useButtonStore(
    (state) => state.toggleSecondButton
  );
  const terminal = usePostStore((state) => state.terminal);
  const setTerminal = usePostStore((state) => state.setTerminal);

  function onChange(e: any) {
    setTerminal(e.target?.value);
  }

  const handleSubmit = () => {
    toggleSecondButton();
  };

  return (
    <>
      <div className="codebox-container">
        {secondButton ? null : (
          <div className="codebox-typing">
            <textarea onChange={onChange} />
          </div>
        )}

        <div
          className="codebox-result"
          style={secondButton ? { width: "100%" } : {}}
        >
          {secondButton ? (
            <div className="edit-box">
              <div></div>
              <button className="edit" onClick={() => toggleSecondButton()}>
                <p>수정하기</p>
                <img src={edit} alt="edit" />
              </button>
            </div>
          ) : null}
          <SyntaxHighlighter language="bash">{terminal}</SyntaxHighlighter>
        </div>
      </div>
      {secondButton ? null : (
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
