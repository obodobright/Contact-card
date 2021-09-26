import React from 'react';

const Active = (props) => {
    return ( 
        <div>
            Active Friends
            {props.list.map((friend)=>(
                <li key={friend.name}>
                    <span>{friend.name}</span>
                    <button onClick={()=>props.onRemoveFriends(friend.name)}>Remove</button>
                    <button onClick={()=>props.handleToggle(friend.name)}>Deactivate</button>
                    
                </li>
            ))}
        </div>
     );
}
 
export default Active;