import React, { Component } from 'react';


class Feed5 extends Component {
    constructor(){
    super()
    this.state = {
        tags: 
            {
            id: 5,
            suggestion: 'Ability to follow others',
            meaning: 'lorem ipsum ette',
            badge: 'feature',
            comment: 2
            }
        
    }
    }
    render() { 
        const tags = this.state.tags
        return ( 
            <React.Fragment>
                <div key={tags.id} style={{background:'gold'}}>
                <h3>{tags.suggestion}</h3>
                <p>{tags.meaning}</p>
                <p>{tags.badge}</p>
                <span>{tags.comment}</span>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Feed5;