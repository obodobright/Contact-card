import React from 'react';


const Countries = (props) => {
    const {id,name,flag,population,region,capital} = props.country
    return ( 
        <React.Fragment>
            <div className="card" key={id}>
                <img src={flag} alt={name} width="100px" className="card-image"/>
                <h4>{name}</h4>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </div>
            {props.country.length === 20 ? <button>Read More</button>:null}
        </React.Fragment>
     );
}
 
export default Countries;