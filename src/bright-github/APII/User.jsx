import React from 'react'
import User from './users'
import Loading from './loading'

class UserList extends React.Component{
    constructor(){
        super()
        this.state={
            user : [],
            isLoaded :true,
            error : null
        }
        this.handleRemove = this.handleRemove.bind(this)
    }
    componentDidMount(){
        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
        .then(res => res.json())
        .then((json)=>{
            this.setState({
                user:json,
                isLoaded :false
            })
        },
        )
        
    }
    isLoaded = () =>{
        return <div>LOADING...</div>
    }
    handleRemove(id){
        this.setState((currentState)=>{
            return{
                user: currentState.user.filter(user => user.id !== id)
            }
        })
    }
    render(){
        const {user,isLoaded} = this.state
            
            if(isLoaded){
                return(
                    <Loading />
                )
            }
            return(
                    <div>
                        <h3 className="text-center">CONTACT CARD</h3>
                        {user.map((user)=>(
                            <User key={user.id} user={user} removeUser={this.handleRemove} addNew= {true}/>
                        ))}
                    </div>
                    )
            
    }
}
export default UserList