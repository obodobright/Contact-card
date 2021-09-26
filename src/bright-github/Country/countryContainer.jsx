import React from 'react'
import CountryList from './countryList'
import Nav from './nav'
import  {ThemeProvider} from './theme.js'


// const StyledApp = `${styled.div}`

class CountryContainer extends React.Component{
constructor(){
    super()
    this.state = {
        theme : 'light',
        timeToggler: ()=>{
            this.setState(({ theme }) =>({
                theme: theme === 'light' ? 'dark' : 'light'
            }
               
            ))
        }
    }
    
}

    render(){
        return(
            <ThemeProvider value={this.state}>
                <div className={this.state.theme}>
                <Nav />
                <CountryList />
                </div>                
            </ThemeProvider>
        );
    }
}

export default CountryContainer