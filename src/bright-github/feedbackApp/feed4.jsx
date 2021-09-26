import React, { Component } from 'react';


class Feeds4 extends Component {
    constructor(){
        super()
        this.state={
            tags: { 
            id: 4,
            suggestion: 'Allow image/audio upload to feedback',
            meaning: 'Imaes and screenshorts can enhance comments on solutions',
            badge: 'Enhancement',
            comment: 1
        }}

    }
  
    render() { 
        const tags = this.state.tags
        return ( 
            <React.Fragment>
                <div key={tags.id}>
                <h3>{tags.suggestion}</h3>
                <p>{tags.meaning}</p>
                <p>{tags.badge}</p>
                <span>{tags.comment}</span>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Feeds4;