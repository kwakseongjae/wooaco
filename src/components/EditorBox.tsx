import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useEffect, useRef, useState } from "react";
import complete from "../assets/complete.png";

const DESCRIPTION_CONTENT = "DESCRIPTION_CONTENT";

function EditorBox() {
  const [content, setContent] = useState<string>(" ");
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    let item = localStorage.getItem(DESCRIPTION_CONTENT);
    if (item) {
      editorRef.current?.getInstance().setMarkdown(item);
    }
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data = editorRef.current?.getInstance().getMarkdown() || "";
    localStorage.setItem(DESCRIPTION_CONTENT, JSON.stringify(data));
  };

  return (
    <div className="editorbox">
      <p>문제 상황을 설명해주세요.</p>
      <Editor
        initialValue={content || " "}
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
        ref={editorRef}
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task"],
          ["link"],
          ["code", "codeblock"],
        ]}
      />
      <div className="complete-btn">
        <button className="icon-button">
          <img src={complete} alt="complete" /> 완료
        </button>
      </div>
    </div>
  );
}

export default EditorBox;
