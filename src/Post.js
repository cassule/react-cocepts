import React, { Component } from "react";

import PostHeader from "./PostHeader";

class Post extends Component {
  render() {
    return (
      <>
        <div className="post">
          <PostHeader />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta odio
            nemo minus tenetur id sequi rem explicabo architecto, cum
            asperiores, aut ex reprehenderit assumenda perferendis ratione
            quisquam necessitatibus, nihil iusto.
          </p>
        </div>
      </>
    );
  }
}

export default Post;
