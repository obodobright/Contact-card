import React from 'react';
import Data from './data'
const Comments = (props) => {
    const comment = Data
    return ( 
        <div>
         {comment.map((comment)=>(
             <div key={comment.id}>
                 <h4>{comment.name}</h4>
                 <p>{comment.username}</p>
                 <img src={comment.image} alt="" />
                 <p>{comment.comment}</p>
             </div>
         ))}
        </div>
     );
}
 
export default Comments;