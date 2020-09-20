import React from 'react';



class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        {this.props.posts.map((post, index) => {
          return (
            <div className="entries" key={index} onClick={() => this.props.getOnePost(post.id)}>
              <div className="entryTitle">{post.title}</div>
              <div className="entryTime">{post.date}</div>
              <div className="entryBody">{post.body}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Post;