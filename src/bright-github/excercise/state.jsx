import React from 'react'

class State extends React.Component{
    constructor(){
        super()
        this.state = {
            mode: 'light'
        }
    }
    changeLight(){
        this.setState({
            mode:'dark'
        })
    }
    changeDark(){
        this.setState({
            mode: 'light'
        })
    }
    render(){
        const {mode} = this.state
        return(
            <div style={{
                height: '663px',
                background: mode === 'light'? 'white':'black'
            }}>
                {mode === "light"? 
                <button onClick={()=>this.changeLight()}>Light
                </button>: 
                <button onClick={()=>this.changeDark()}>Dark
                </button> 
                }
            </div>
        )
    }
}
export default State