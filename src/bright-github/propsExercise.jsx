import React from 'react'

class PropsExcercise extends React.Component{
    render(){
        return(
            <React.Fragment>
                <img src={this.props.user.image} alt="" />
                <h2>Name: {this.props.user.name}</h2>
                <p>Username: {this.props.user.username}</p>
            </React.Fragment>
        )
    }

}
export default PropsExcercise