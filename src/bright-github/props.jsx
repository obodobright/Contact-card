import React from 'react'

// As arguments are  to  functions, so as props are to components
// In passing props,  we are not just limited to just the normal ways, we can pass functions as props
class Props extends React.Component{
    render(){
        
        return(
            <React.Fragment>
                 <img src={this.props.image} alt="picsImage" />
                <h1>Name: {this.props.name}</h1>
                <h4>Username: {this.props.username}</h4>
            </React.Fragment>
        )
    }
}
export default Props