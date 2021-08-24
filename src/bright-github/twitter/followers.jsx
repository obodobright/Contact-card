import React from 'react';

class Followers extends React.Component{
    render(){
     return(
       <div className="followerContainer">
         <ul>
           {this.props.follower.map((follower)=>(
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
}

export default Followers