import Header from "@components/Header";
import Codebox from "@components/Codebox";
import Terminal from "@components/Terminal";
import EditorBox from "@components/EditorBox";
import usePostStore from "@store/postStore";
import { useState } from "react";
function NewPost() {
  const setTitle = usePostStore((state) => state.setTitle);
  const [isFirstButtonClicked, setIsFirstButtonClicked] =
    useState<boolean>(false);
  const [isSecondButtonClicked, setIsSecondButtonClicked] =
    useState<boolean>(false);

  return (
    <>
      <Header />
      <div className="post-title">
        <input onChange={(e: any) => setTitle(e.target?.value)} required />
        <label>제목</label>
        <span></span>
      </div>
      <div className="newpost">
        <div className="code-container">
          <Codebox setIsFirstButtonClicked={setIsFirstButtonClicked} />
          {isFirstButtonClicked ? (
            <Terminal setIsSecondButtonClicked={setIsSecondButtonClicked} />
          ) : null}
        </div>
        <div className="editor-container">
          {isSecondButtonClicked ? <EditorBox /> : null}
        </div>
      </div>
    </>
  );
}

export default NewPost;
