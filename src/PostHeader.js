import React from "react";

const PostHeader = ({ title, avatar, time }) => (
  <div className="post-header">
    <img src={avatar} alt="avatar"></img>

    <div className="title">
      <h2>{title}</h2>

      <span>{time}</span>
    </div>
  </div>
);

export default PostHeader;
