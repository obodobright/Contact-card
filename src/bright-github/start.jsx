import React from 'react'

class Start extends React.Component{
    constructor(){
        super()
        this.state ={
            pageWelcome: 'Welcome to Our Page'
        }
    }
    changeMessage(){
        this.setState({
            pageWelcome : "Come let's  us take you round here!"
        })
    }
    
    render(){
        const name = 'Obodo Bright'
        return(
            <React.Fragment>
                <div>
                    <h1>Hi {name},</h1>
                    <h3>{this.state.pageWelcome}</h3> 
                    <button onClick={()=>this.changeMessage()}>Explore</button>
                </div>
            </React.Fragment>
        )
    }
}
export default Start