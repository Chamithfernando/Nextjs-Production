import React from 'react';

export default function Body({ posts  }) {

   const postMap= [];

    if(posts){
       postMap = posts.map(post => (
            
            <li key={post.id} className="list-group-item">
              {post.id} -- {post.title}
            </li>
            
            
          ));
    }

    return (
    
        <ul className="list-group mb-3">
          {postMap}
        </ul>
      );

}
