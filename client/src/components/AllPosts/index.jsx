import React from "react";

function AllPosts({ getOnePost, posts }) {
  {
    return (
      <div className="mainEntriesContainer">
        {posts.map((post, index) => {
          const { id, title, date, body } = post;
          return (
            <ul
              className="mainEntries"
              key={index}
              onClick={() => getOnePost(id)}
            >
              <div className="entriesPadding">
                <div className="entryTitle">{title}</div>
                <div className="entryTime">{date}</div>
                <div className="entryBody">{body}</div>
              </div>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default AllPosts;
