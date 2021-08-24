import React from 'react'
import './nav.css'
class Navs extends React.Component{
    render(){
        const languages = ['All','JavaScript','Java','Ruby', 'CSS','Python']
        return(
            <React.Fragment>
                <section>
                <h4>
                <span style={{color:'red'}}>Popular</span> Battle
                </h4>
                <div className="nav-bar">
                    <ul className="nav">
                    {languages.map((language)=>(
                    <li key={language} className="nav-item">
                        <button className="btn">
                            {language}
                        </button>
                    </li>
                    ))}
                    </ul>
                
                </div>
                </section>
                
            </React.Fragment>
        )
    }
}
export default Navs