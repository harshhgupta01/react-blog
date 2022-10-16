import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ posts: json });
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Blog Posts</h1>
        </div>
        {posts.map((post) => (
          <div key={post.id} className="card">
            <div className="card-header">
              #{post.id} {post.title}
            </div>
            <div className="card-body">
              {/* <h5 className="card-title">Special title treatment</h5> */}
              <p className="card-text">{post.body}</p>
              {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
