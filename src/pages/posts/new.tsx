import Header from "@components/Header";
import Codebox from "@components/Codebox";
import Terminal from "@components/Terminal";
import EditorBox from "@components/EditorBox";
import usePostStore from "@store/postStore";
function NewPost() {
  const setTitle = usePostStore((state) => state.setTitle);

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
          <Codebox />
          <Terminal />
        </div>
        <div className="editor-container">
          <EditorBox />
        </div>
      </div>
    </>
  );
}

export default NewPost;
