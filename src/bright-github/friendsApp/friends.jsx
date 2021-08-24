import React from 'react';
import FriendsList from './friendslist';

class Friends extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            friends : ['Jordan', 'Bright', 'Dipo']
        }

        this.handleRemoveFriend = this.handleRemoveFriend.bind(this)
    }
    handleAddFriend(){}
    handleRemoveFriend(name){
        this.setState((currentState)=>{
            return{
                friends : currentState.friends.filter((friend)=> friend !== name)
            }
        })
        console.log('cllicked')
    }
 
    render(){
        
        return(
        <div>
           <FriendsList 
           list={this.state.friends}
           onRemoveFriends = {this.handleRemoveFriend}
           />
        </div>
        )
    }
}
 
export default Friends;