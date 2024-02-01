import React from "react";
import Header from "../../components/Header";
import Codebox from "../../components/Codebox";
import Terminal from "../../components/Terminal";
import Description from "../../components/Description";
import CommentList from "../../components/CommentList";

function DetailPost() {
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
          <CommentList />
        </div>
      </div>
    </>
  );
}

export default DetailPost;
