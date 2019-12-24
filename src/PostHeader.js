import React, { Component } from "react";

class PostHeader extends Component {
  render() {
    return (
      <>
        <div className="post-header">
          <img
            src="https://api.adorable.io/avatars/183/johnny-english.png"
            alt="Image"
          ></img>

          <div className="title">
            <h2>Josué Francisco</h2>

            <span>3 min</span>
          </div>
        </div>
      </>
    );
  }
}

export default PostHeader;
