import React from 'react';
import './nav.css'

class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1>NAVBAR EXERCISE</h1>
                <div className="navbar">
                <ul className="nav">
                {this.props.nav.map((nav)=>(
                    <li key={nav.id} className="nav-item">
                        {nav.navigation}
                    </li>
                ))}
                </ul>
                </div>
            </React.Fragment>
        )
    }
}
export default Navbar