import React, { Component } from 'react';
import Ebus from './ebus.JPG'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            login : 'Obodo Bright',
            image: Ebus,
            mode : 'light'
           
         }
    }
    changeDarkMode(){
        this.setState({
            mode: 'dark'
        })
    }
    changeLightMode(){
        this.setState({
            mode: 'light'
        })
    }
    render() { 
        return ( 
            <div style={styleNav} >
                <img src={this.state.image} alt=""  width="40px" style={{borderRadius:'1.5em', marginRight: '0', marginLeft:'auto',display:'block'}}/>
                {this.state.mode === 'light' ? <button onClick={this.changeDarkMode.bind(this)}>light</button>: <button onClick={this.changeLightMode.bind(this)}>Dark</button>}
            </div>
         );
    }
}
const styleNav ={
    background: 'red',
    borderBottom : '2px solid yellow',
    marginBottom:'1em',
    width: "400px",
    margin: "0 auto",
    padding: '0.3em'
    }
 
export default NavBar;