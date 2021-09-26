import React, { Component } from 'react';
import './nav.css'
import { fetchPopularRepos } from '../../utility/api';


class All extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedNav : 'All',
            isLight : 'light',
            repos : null,
            error : null
        }
        this.updateSelectedNav = this.updateSelectedNav.bind(this)
        this.isLoading = this.isLoading.bind(this)
    }
    updateSelectedNav(selectedNav){
        this.setState({
            selectedNav,
            error: null,
            repos:null
        })

        fetchPopularRepos(selectedNav)
        .then((repos)=> this.setState({
            repos,
            error : null
        }))
        .catch(()=>{
            console.warn('Error fetching repo:')

            this.setState({
                error: ' there was an error while fetching'
            })
        })
    }

   isLoading(){
       return <h1>LOADING</h1>
       
   }
  
    render() { 
        const nav = ['All', 'Javascript', 'Python', 'Java', 'Ruby']
        return ( 
            <React.Fragment>
                <div className="navbar">
                    {nav.map((nav)=> (
                    <li key={nav} class="nav-item">
                        <button onClick={()=>this.updateSelectedNav(nav)
                        }
                        style={nav === this.state.selectedNav ? {color:'red',border:'2px solid blue'}: null}>{nav}</button>
                    </li>
                    ))}
                
                </div>
                    {this.isLoading() && <p>LOADING...</p>}
                    {this.state.repos && <pre>{JSON.stringify(this.state.repos, null, 2)}</pre>}
                    {this.state.error && <p>{this.state.error}</p>}
                    
            </React.Fragment>
            
         );
    }
}
 
export default All;