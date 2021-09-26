import React, { Component } from 'react';
import Countries from './countries';
 import Loading from './loading';
class CountryList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            countries :  [],
            isLoaded : true
         }
    }

componentDidMount(){
    const url = 'https://restcountries.eu/rest/v2/all'

    fetch(url)
    .then((res)=> res.json())
    .then((data)=>{
        this.setState({
            countries : data,
            isLoaded :false
        })
    })
}
 isLoaded(){
     return <div>Loading</div>
 }
    render() { 
        if(this.state.isLoaded){
            return <Loading />
        }
            return ( 
                <React.Fragment>
                    {this.state.countries.map((country) =>(
                        <Countries key={country.name} country={country}/>
                    ))}
                </React.Fragment>
             );
              
    }
}
 
export default CountryList;