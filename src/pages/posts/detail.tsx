import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Codebox from "../../components/Codebox";
import Terminal from "../../components/Terminal";
import Description from "../../components/Description";
import CommentList from "../../components/CommentList";
import ContentViewer from "../../components/Viewer";
import Markdown from "../../components/Viewer";

const CONTENT_KEY = "CONTENT_KEY";

function DetailPost() {
  const [content, setContent] = useState<string>(" ");

  useEffect(() => {
    try {
      let localData = localStorage.getItem(CONTENT_KEY);
      if (localData) {
        let parsedData = JSON.parse(localData);
        setContent(`${parsedData}`);
      }
    } catch {
      console.log("No saved Data");
    }
  }, []);
  return (
    <>
      <Header />
      <div className="content_wrapper">
        <div className="code-container">
          <Codebox />
          <Terminal />
        </div>
        <div className="description-container">
          <Description />
          {/* <ContentViewer content={content} /> */}
          <CommentList />
        </div>
        <div className="viewer"></div>
      </div>
    </>
  );
}

export default DetailPost;
