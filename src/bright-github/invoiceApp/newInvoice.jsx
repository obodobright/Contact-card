import React from 'react';
import PropTypes from'prop-types'

class NewInvoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name : "",
            amount: "",
            code : "",
            status : 'pending',
            date : "",
         }
    }
    updateInput(e){
      this.setState({
         [e.target.id]: e.target.value
      })
    }
  
    render() { 
        const {name, code,amount, status, date}= this.state 
        return ( 
            <main>
            <div>
            <span>Track Number :<input type="text"
              id="code"
              onChange={this.updateInput.bind(this)} 
              placeholder="track Number"/>
             </span> 
            <h5><input type="text" 
                placeholder="Name" 
                id="name"
                onChange={this.updateInput.bind(this)} />
            </h5>
            <p>Due:<input type="test" 
                id="date"
                onChange={this.updateInput.bind(this)} />
            </p>
            <p>$<input type="number" 
                placeholder="amount" 
                id="amount" 
                onChange={this.updateInput.bind(this)}/>
            </p>
            <input type="button" 
            value={this.state.status}
            />
             <button onClick={()=>this.props.handleNewTodo(name,date,amount,code,status)}>Add Invoice</button>
         </div>
                {/*
                <button onClick={()=>this.props.handleHideRequest()}>Close</button> */}
            </main>
            
         );
    }
}
NewInvoice.propTypes = {
    handleNewTodo: PropTypes.func.isRequired
}

 
export default NewInvoice;