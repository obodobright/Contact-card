import React from 'react';
import './twitter.css'
import Me from './myface.JPG'
import Followers from './followers';

class Twitter extends React.Component{
    constructor(){
        super()
        this.state = {
            followers: [
                    {id:1, name:'Obodo Bright', username:'@obodobright', image:Me,button : 'Follow'},
                    {id:2, name:'Kalu Uche', username:'@iamuche',image:Me, button : 'Follow'},
                    {id:3, name:'Suponu Omayemi',username:'@Omastellz', image:Me, button : 'Follow'}
            ],
            
            }
            this.handleRemoveFollower = this.handleRemoveFollower.bind(this)
            this.handleOnFollow = this.handleOnFollow.bind(this)
    }
  
   handleRemoveFollower(name){
        this.setState((currentState)=>{
            return{
                followers : currentState.followers.filter((fw)=>fw !==name)
            }
        })
   }
   handleOnFollow(id){
       const follow = this.state.followers.map((f)=>{
           if(f.id === id){
            f.button = 'following' 
            
           }
        return f
       });
       this.setState({follow})
   }
//    handleUnFollow(id){
//        console.log(id)
//    }
  
    render(){
        return(
            <div className="container">
               
                <Followers follower={this.state.followers} 
                // btn={this.state.button} 
                onFollow={this.handleOnFollow}
                onDeleteBtn = {this.handleRemoveFollower}
                />
            </div>
        )
    }
}
export default Twitter