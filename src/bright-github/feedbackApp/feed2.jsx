import React, { Component } from 'react';


class Feed2 extends Component {
    constructor(){
        super()
        this.state = { 
            tags: {
                id: 2,
                suggestion: 'Add a dark theme',
                 meaning: 'It will help people with light',
                 badge: 'Feature',
                comment: 4
            }
         }
    }
    
    render() { 
        const tags = this.state.tags
        return ( 
            <React.Fragment>
                <div key={tags.id} style={{background:'blue'}}>
                <h3>{tags.suggestion}</h3>
                
                <p>{tags.badge}</p>
                <span>{tags.comment}</span>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Feed2;