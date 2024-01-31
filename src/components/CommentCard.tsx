import React from "react";

function CommentCard() {
  return (
    <div className="comment-card">
      <img
        src="https://i.namu.wiki/i/vDDaVK4wm1-vPZgAOI65rbhLhr1vPCzBgoRKSS7mEFx4IH2vtHvvMN41Umw-taptksIW_WqnjwOdcGbAMpAmrQ.webp"
        alt="profile"
      />
      <div className="comment-info">
        <div className="author">hey_miss_true</div>
        <div className="comment">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <div className="reply">답글 달기</div>
      </div>
    </div>
  );
}

export default CommentCard;
