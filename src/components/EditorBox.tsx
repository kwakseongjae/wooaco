import { useRef } from "react";
import complete from "@assets/img/complete.png";
import { Editor } from "@toast-ui/react-editor";
import usePostStore from "@store/postStore";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useNavigate } from "react-router-dom";



function EditorBox() {
  const editorRef = useRef<Editor>(null);
  const description = usePostStore((state) => state.description);
  const setDescription = usePostStore((state) => state.setDescription);
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data = editorRef.current?.getInstance().getMarkdown() || " ";
    setDescription(data);
    navigate("/detail");
  };

  return (
    <div className="editorbox">
      <p>문제 상황을 설명해주세요.</p>
      <Editor
        initialValue={description || " "}
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
        ref={editorRef}
        usageStatistics={false}
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task"],
          ["link"],
          ["code", "codeblock"],
        ]}
      />
      <div className="complete-btn">
        <button className="icon-button" onClick={handleSubmit}>
          <img src={complete} alt="complete" /> 완료
        </button>
      </div>
    </div>
  );
}

export default EditorBox;
