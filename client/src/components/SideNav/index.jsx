import React from 'react';

function SideNav({getOnePost,posts}) {
 {
    return (
      <div className="sideNavEntriesContainer">
        {posts.map((post, index) => {
          const {id, title, date, body} = post
          return (
            <div className="sideEntriesWrapper" key={index} onClick={() => getOnePost(id)}>
              <div className="sideEntries">{date}</div>
            </div>
          );
        })}
      </div>
    );
}
}

export default SideNav;