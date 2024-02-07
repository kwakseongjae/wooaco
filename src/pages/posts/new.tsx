import Header from "@components/Header";
import Codebox from "@components/Codebox";
import Terminal from "@components/Terminal";
import EditorBox from "@components/EditorBox";
import { useState } from "react";

function NewPost() {
  const [title, setTitle] = useState<string>("");
  const [lang, setLang] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [terminal, setTerminal] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleChange = (event: any) => {
    const { name } = event.target;
    if (name === "title") setTitle(event.target.value);
    if (name === "lang") setLang(event.target.value);
    console.log(title, lang);
  };

  return (
    <>
      <Header />
      <div className="post-title">
        <input name="title" onChange={handleChange} required />
        <label>제목</label>
        <span></span>
      </div>
      <div className="newpost">
        <div className="code-container">
          <Codebox />
          {/* <Terminal onSubmit={handleChange} terminal={terminal} /> */}
        </div>
        <div className="editor-container">
          {/* <EditorBox onSubmit={handleChange} description={description} /> */}
        </div>
      </div>
    </>
  );
}

export default NewPost;
