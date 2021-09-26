import React from 'react';
import Inactive from './inactive';
import Active  from './active';

class Friends extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            friends : [{
                name:"dipo",
                active:true
            },
            {
                name:"Tola",
                active:true
            },
            {
                name:"Kehinde",
                active:false
            }],
            input : ""
        }

        this.handleRemoveFriend = this.handleRemoveFriend.bind(this)
        // this.updateInput = this.updateInput.bind(this)
        this.handleToggleFriend = this.handleToggleFriend.bind(this)
    }
    handleAddFriend(){
        this.setState((currentState)=>{
            return{
            friends : currentState.friends.concat([{
                name: currentState.input,
                active:true
            }]),
            input: ''
         }
         })
    }
  handleToggleFriend(name){
      this.setState((currentState)=>{
          const myFriend = currentState.friends.find((friend)=> friend.name === name)

          return{
              friends: currentState.friends.filter((friend)=>friend.name !== name).concat([{
                  name,
                  active: !myFriend.active
              }])
          }
      })
  }
    handleRemoveFriend(name){
        this.setState((currentState)=>{
            return{
                friends : currentState.friends.filter((friend)=> friend.name !== name)
            }
        })
        console.log('cllicked')
    }
  updateInput(e){
      const value = e.target.value
    this.setState({
        input : value
    })
    }
    render(){
        
        return(
        <div>
            <input type="text"
             placeholder = "New friend"
            value = {this.state.input}
            onChange = {this.updateInput.bind(this)}
             />
             <button  onClick={()=>this.setState({
                 friends: []
             })}>Clear all</button>
             <button onClick={this.handleAddFriend.bind(this)}>Submit</button>
             <Active list={this.state.friends.filter((friend)=> friend.active === true)} onRemoveFriends = {this.handleRemoveFriend} handleToggle={this.handleToggleFriend}/>
             <Inactive list={this.state.friends.filter((friend)=> friend.active === false)} handleToggle={this.handleToggleFriend}/>
           {/* <FriendsList 
           list={this.state.friends}
           onRemoveFriends = {this.handleRemoveFriend}
           /> */}
        </div>
        )
    }
}
 
export default Friends;