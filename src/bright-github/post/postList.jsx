import React from 'react';

const PostList = (props) => {
    return ( 
        <div>
            <p>{props.post.title}</p>
            <span>{props.post.skill}</span>
            <p>{props.post.level}</p>
        </div>
     );
}
 
export default PostList;