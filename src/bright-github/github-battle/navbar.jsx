import React from 'react';


class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
               <div className="navbar"> 
                   {this.props.navigation.map((nav)=>(
                       <li key={nav} className="nav-item">
                           {nav}
                       </li>
                   ))}
               </div>
            </React.Fragment>
        )
    }
}
export default Navbar