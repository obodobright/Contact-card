import React, { Component } from 'react';


class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            input : 'Loading'
         }
    }
    componentDidMount(){
        const stopper = this.state.input + "..."

       this.interval = window.setInterval(() =>{
            this.state.input === stopper ?
            this.setState({input : 'Loading'}) :
            this.setState((currentState)=>{
                return {
                    input : currentState.input + '.'
                }
            })
        },300)
       
    }

    componentWillUnmount(){
        window.clearInterval(this.interval)
    }
    render() { 
        return ( 
            <div className="m-4 d-flex align-items-center justify-content-center text-primary">
               <h1>{this.state.input}</h1> 
            </div>
         );
    }
}
 
export default Loading;