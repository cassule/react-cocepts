import React from "react";

import PostHeader from "./PostHeader";

const Post = ({ data }) => (
  <div className="row">
    <div className="post">
      <PostHeader avatar={data.avatar} title={data.title} time={data.time} />
      <p>{data.body}</p>
    </div>
  </div>
);

export default Post;
