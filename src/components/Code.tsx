import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

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

const Code = () => {
  const [content, setContent] = useState(codeString);

  function onChange(e: any) {
    setContent(e.target.value);
  }

  return (
    <div className="code">
      <textarea onChange={onChange} />
      <SyntaxHighlighter language="html">{content}</SyntaxHighlighter>
    </div>
  );
};

export default Code;
