import React from 'react'

const User = (props) =>{
    const {id,name,email,phone,website,company} = props.user
    return(
        <div>
            
            <div style={{background:'whitesmoke',margin:'1em', height:'200px',width:'fit-content',position:'relative', left:'35%'}}>
                <main style={{display:'flex'}}>
                <div style={{background:'blue',width:'250px', padding:'5em 0.5em',height:'200px',textAlign:'center',color:'white'}}>
                <h4>{name}</h4>
                <span>{company.name}</span>
                </div>
                <div style={{padding:'2em 0.5em'}}>
                <a href={email}>{email}</a>
                <hr />
                <p>{phone}</p>
                <hr />
                <a href={website}>{website}</a>
                <button onClick={()=>props.removeUser(id)}>Remove</button>
            </div>
            </main>
            </div>
            
        </div>
    )
}
export default User