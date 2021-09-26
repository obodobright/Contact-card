import React, { Component } from 'react';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            input : 'Loading'
         }
    }
componentDidMount(){
    const stopper = this.state.input + '...'
    
  this.interval = window.setInterval(()=>{
       this.state.input ===  stopper ? 
       this.setState({input : 'Loading'}):
       this.setState((currentState)=>{
           return{
               input : currentState.input + '.'
           }
       })
   },300)
    
}
componentWillUnmount(){
    clearInterval(this.interval)
}

    render() { 
        return ( 
            <div>
                <h3>{this.state.input}</h3>
            </div>
         );
    }
}
 
export default Loading;