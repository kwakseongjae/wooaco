import { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import usePostStore from "@store/postStore";

function Description() {
  const description = usePostStore((state) => state.description);

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
          children={description}
          remarkPlugins={[remarkGfm]}
        ></ReactMarkdown>
      </div>
    </>
  );
}

export default Description;
