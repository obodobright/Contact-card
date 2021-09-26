import React from 'react';

class Followers extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn : true
        }
    }
    render(){
        const {isLoggedIn} = this.state
        const {follower} = this.props
    if(isLoggedIn){       
     return(
       <div className="followerContainer">
            <h3>Who to Follow</h3>                                                                                                                                                                                                                           
         <ul>
           {follower.map((follower)=>(
            <main key={follower.key} style={{display:'flex',border:'2px solid ash', padding:"0.5em", margin:'0.2em'}}>
                    <img src={follower.image} alt="" width="50px" height="50px" style={{borderRadius:'3em'}}/>
                <div style={{margin:'0.3em'}}>
                        <h4>{follower.name}</h4>
                        <span>{follower.username}</span>
                    <div>
                        <button onClick={()=>this.props.onFollow(follower.id)} className="followBtn">
                            {follower.button}
                        </button>
                        <button onClick={() => this.props.onDeleteBtn(follower)} className="timesBtn">
                        x</button>
                    </div>
                </div>
            </main>
               
            ))}
             
            </ul>
            </div>
            
        )
           }
           else{
               return (
                   <div>
                       <h3 style={{color:'blue'}}>Please Login</h3>
                   </div>
               )
           }
    }
}

export default Followers