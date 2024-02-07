import { useEffect, useState } from "react";
import Header from "@components/Header";
import Codebox from "@components/Codebox";
import Terminal from "@components/Terminal";
import Description from "@components/Description";
import CommentList from "@components/CommentList";
import usePostStore from "@store/postStore";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CONTENT_KEY = "CONTENT_KEY";

function DetailPost() {
  const { title, lang, code, terminal, description } = usePostStore();

  return (
    <>
      <Header />
      {/* TODO: detail 페이지에선 readonly로 컨텐츠 제공 */}
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
              <div className="selectBox"></div>
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
          <CommentList />
        </div>
      </div>
    </>
  );
}

export default DetailPost;
