import { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

const CONTENT_KEY = "CONTENT_KEY";

function Description() {
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
      <div className="description">
        <div className="profile-card">
          <img
            src="https://i.namu.wiki/i/vDDaVK4wm1-vPZgAOI65rbhLhr1vPCzBgoRKSS7mEFx4IH2vtHvvMN41Umw-taptksIW_WqnjwOdcGbAMpAmrQ.webp"
            alt="profile"
          />
          <div className="author">hey_miss_true</div>
          <div className="follow-button">💖</div>
        </div>
        <div className="title">이게 왜 안되지...</div>
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
        ></ReactMarkdown>
      </div>
    </>
  );
}

export default Description;
