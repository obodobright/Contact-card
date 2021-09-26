import React from 'react';

const Inactive = (props) => {
    return ( 
        <div>
            Inactive friends
           {props.list.map((friend)=>(
               <li key={friend.name}>
                   <span>{friend.name}</span>
                   <button onClick={()=>props.handleToggle(friend.name)}>Activate</button>
               </li>
           ))}
        </div>
     );
}
 
export default Inactive;