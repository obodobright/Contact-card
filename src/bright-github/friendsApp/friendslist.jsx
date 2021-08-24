import React from 'react'

function FriendsList(props){
   
    return(
        <div>
            <ul>
                {props.list.map((friend)=>(
                    <li key={friend}>
                       <span>{friend}</span> 
                       <button onClick={()=>props.onRemoveFriends(friend)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default FriendsList