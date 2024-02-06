import { useEffect, useState } from "react";
import Header from "@components/Header";
import Codebox from "@components/Codebox";
import Terminal from "@components/Terminal";
import Description from "@components/Description";
import CommentList from "@components/CommentList";

const CONTENT_KEY = "CONTENT_KEY";

function DetailPost() {
  const [, setContent] = useState<string>(" ");

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
      {/* TODO: detail 페이지에선 readonly로 컨텐츠 제공 */}
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
