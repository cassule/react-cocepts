import React, { Component } from "react";
import { render } from "react-dom";

import Header from "./Header";
import Post from "./Post";

import "./style.scss";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "John Doe",
        time: "3 min",
        avatar: "https://api.adorable.io/avatars/183/johnny-english.png",
        body:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta odio nemo minus tenetur id sequi rem explicabo architecto, cum asperiores, aut ex reprehenderit assumenda perferendis ratione quisquam necessitatibus, nihil iusto."
      },
      {
        id: 2,
        title: "Dannys Doe",
        time: "10 min",
        avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
        body:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta odio nemo minus tenetur id sequi rem explicabo architecto, cum asperiores, aut ex reprehenderit assumenda perferendis ratione quisquam necessitatibus, nihil iusto."
      },
      {
        id: 3,
        title: "Nanda Doe",
        time: "15 min",
        avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
        body:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta odio nemo minus tenetur id sequi rem explicabo architecto, cum asperiores, aut ex reprehenderit assumenda perferendis ratione quisquam necessitatibus, nihil iusto."
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <>
        <Header />

        {posts && posts.map(post => <Post key={post.id} data={post} />)}
      </>
    );
  }
}

render(<App />, document.getElementById("app"));
