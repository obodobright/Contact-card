import React from 'react';
import Feed1 from './feed1'
import Feed2 from './feed2'
import Feed3 from './feed3'
import Feed4 from './feed4'
import Feed5 from './feed5'
import Data from './data'

class feedbackList extends React.Component{
    constructor(){
        super()
        this.state = {
            comment : Data
        }
    }
    render(){
        const data = Data[0]
       console.log(this.props.list)
        return(
            <div style={{background:'whitesmoke'}}>
                <Feed1 id={data.id} name={data.name} username={data.username} comment={data.comment}/>
                <Feed2 />
                <Feed3 />
                <Feed4 />
                <Feed5 />
                
                {/* {this.props.suggestion.map((s)=>(
                    // <li key={s.id}>
                    //     <h3>{s.suggestion}</h3>
                    //     <p>{s.meaning}</p>
                    //     <span>{s.badge}</span>
                    //     <span>{s.comment}</span>
                    // </li>
                    
                ))} */}
            </div>
        )
    }
}
export default feedbackList