import Header from "@components/Header";
import Description from "@components/Description";
import CommentList from "@components/CommentList";
import send from "@assets/img/send.png";
import usePostStore from "@store/postStore";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function DetailPost() {
  const { title, lang, code, terminal, description } = usePostStore();

  return (
    <>
      <Header />
      <div className="content_wrapper">
        <div className="code-container">
          <div className="codebox">
            <div className="lang-select">
              <p>
                언어는{" "}
                {lang === "html"
                  ? "HTML"
                  : lang.charAt(0).toUpperCase() + lang.slice(1)}
              </p>
            </div>
            <div className="codebox-container">
              <div className="codebox-result" style={{ width: "100%" }}>
                <SyntaxHighlighter language={lang}>{code}</SyntaxHighlighter>
              </div>
            </div>
          </div>
          <div className="codebox-container">
            <div className="codebox-result" style={{ width: "100%" }}>
              <SyntaxHighlighter language="bash">{terminal}</SyntaxHighlighter>
            </div>
          </div>
        </div>
        <div className="description-container">
          <Description title={title} description={description} />
          <textarea className="comment" placeholder="댓글을 남겨주세요 !" />
          <div className="comment-submit">
            <button className="icon-button">
              <img src={send} alt="next" />
            </button>
          </div>
          {/* <CommentList /> */}
        </div>
      </div>
    </>
  );
}

export default DetailPost;
