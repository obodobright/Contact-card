import React, { Component } from 'react';
import Comments from './feed1list';

class Feed1 extends Component {
    constructor(props){
        super(props)
    }
    // constructor(){
    //     super()
    //     this.state = { 
    //     isCommented : false,
    //     tags:{
    //         id: 1,
    //         suggestion: 'Add tags for solution',
    //         meaning: 'Easier to search fOr solutions',
    //         badge: 'Endowment',
    //         comment: 1
    //     }
    //  }
     
    // }
    
    render() { 
        // const tags = this.state.tags
        
        return ( 
            <React.Fragment>
                {/* <div key={tags.id} style={{background:'gray'}}>
                <h3>{tags.suggestion}</h3>
                <p>{tags.meaning}</p>
                <p>{tags.badge}</p>
                <span>{tags.comment}</span>
                </div>
                {this.state.isCommented === true ? <Comments /> : null} */}
                <div style={{background:'gray'}}>
                <h3>{this.props.name}</h3>
                <p>{this.props.username}</p>
                
                <span>{this.props.comment}</span>
                </div>
                
            </React.Fragment>
         );
    }
}
 
export default Feed1;