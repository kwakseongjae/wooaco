import React from "react";
import Header from "../../components/Header";
import Codebox from "../../components/Codebox";
import Terminal from "../../components/Terminal";


function NewPost() {
  
  return (
    <>
      <Header />
      <div className="post_title">
        <input name="title" required />
        <label>제목</label>
        <span></span>
      </div>
      <div className="newpost">
        <div className="code-container">
          <Codebox />
          <Terminal />
        </div>
        
      </div>
    </>
  );
}

export default NewPost;
