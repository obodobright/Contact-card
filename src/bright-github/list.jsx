import React  from 'react'

class List extends React.Component{
    render(){
        return(
            <React.Fragment>
                <ul>
                    {this.props.friends.map((friend, index)=>(
                        <li key={index}>
                            {friend.name}
                        </li>
                    ))}
                </ul>
                <ul>
                    {this.props.data.map((datum)=>(
                        <li key={datum.key}>
                            {datum.username}
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        )
    }
}
export default List