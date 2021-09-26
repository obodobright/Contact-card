import React, { Component } from 'react';


class Feed3 extends Component {
    constructor(){
        super()
        this.state = {
            tags:{ 
            id: 3,
            suggestion: 'Question and answer within challenge hub',
            meaning: 'Challenge specific question and answer  would make for better reference',
            badge: 'Feature',
            comment: 1
        }}
    }
   
    render() { 
        const tags = this.state.tags
        return ( 
            <React.Fragment>
                <div key={tags.id} style={{background:'purple'}}>
                <h3>{tags.suggestion}</h3>
                <p>{tags.meaning}</p>
                <p>{tags.badge}</p>
                <span>{tags.comment}</span>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Feed3;