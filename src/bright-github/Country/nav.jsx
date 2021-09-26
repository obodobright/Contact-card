import React, { Component } from 'react';
import { ThemeConsumer } from './theme'
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nav : [{
                header: 'Where in the World',
                theme: 'dark'
            }]
         }
    }
    
    render() {
        return ( 
            <ThemeConsumer>
                {({theme, toggleTheme})=> (
                     this.state.nav.map((n)=>(
                        <div style={{display: 'flex', justifyContent:'space-between',padding:'1em'}}>
                        <h3>{n.header}</h3>
                        <button onClick={toggleTheme}>{theme === 'light'? 'dark' :'light' }</button>
                        </div>
                    ))
                )}
               
            </ThemeConsumer>
         );
    }
}
 
export default Nav;