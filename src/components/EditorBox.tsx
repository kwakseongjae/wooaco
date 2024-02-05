import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useEffect, useRef, useState } from "react";

const CONTENT_KEY = "CONTENT_KEY";

function EditorBox() {
  const [content, setContent] = useState<string>(" ");
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    let item = localStorage.getItem(CONTENT_KEY);
    if (item) {
      editorRef.current?.getInstance().setMarkdown(item);
    }
  }, []);

  const handleSave = (e: any) => {
    e.preventDefault();

    const data = editorRef.current?.getInstance().getMarkdown() || "";
    localStorage.setItem(CONTENT_KEY, JSON.stringify(data));
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
      <button onClick={handleSave}>Write</button>
    </div>
  );
}

export default EditorBox;
