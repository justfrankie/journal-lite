import React from 'react';

function AllPosts({getOnePost, posts}) {
 {
    return (
      <div>
        {posts.map((post, index) => {
          const {id, title, date, body} = post
          return (
            <div className="entries" key={index} onClick={() => getOnePost(id)}>
              <div className="entryTitle">{title}</div>
              <div className="entryTime">{date}</div>
              <div className="entryBody">{body}</div>
            </div>
          );
        })}
      </div>
    );
}
}

export default AllPosts;