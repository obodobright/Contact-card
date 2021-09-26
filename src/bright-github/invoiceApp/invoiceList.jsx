import React from 'react';
import PropTypes from 'prop-types'
import NewInvoice from './newInvoice';
class InvoiceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h3>Invoice</h3>
                <p>{this.props.list.length} Invoices</p>
                <button onClick={this.props.handleIsClicked} style={btnStyle}>New</button>
                {/* <button onclick={()=>this.clicked === true ? <Twitter /> : null}></button> */}
                {this.props.isClicked === 'yes' && <NewInvoice handleNewTodo={this.props.handleNewTodo} handleHideRequest={this.handleHide}/>}
  
                    {this.props.list.map((li)=>(
                    <div key={li.id}  style ={styles}>
                        <div style={listStyle}>
                            <span style={{fontStyle:'Uppercase'}}>{li.code}</span>
                            <p>{li.name}</p>
                        </div>
                        <div>
                            <div>
                                <p>Due {li.date}</p>
                                <p>${li.amount}</p>
                            </div>
                            <div style={{float:'right',marginTop:'-30px'}}>
                            <button className="styleBtn" style={li.status === 'Paid' ? { padding:'7px 14px',background:'#bdecbd',color:'#036d03', border:'none',borderRadius:'0.4em'}:{padding:'7px 14px',background:'#d4bcacee',color:'#9e4205ee',border:'none',borderRadius:'0.4em'}}>
                            {li.status}
                            </button>
                            </div>
                           
                        </div>
                        
                       
                    </div>
                ))}
            </div>
         );
    }
}
const styles ={
    background: '#2c242c',
    padding:'1em',
    marginBottom: '1em',
     cursor:'pointer',
    marginTop:'1em'
}
const listStyle ={
    display:'flex',
    justifyContent:'space-between',
    marginBottom:'0.5em'
   
}
const btnStyle ={
    float:'right',
    marginTop:'-30px',
    padding: '6px 17px',
    borderRadius:' 1.7em',
    border:'none',
    background:'#c752a0ee',
    color:'white',
    cursor:'pointer'
}


InvoiceList.propTypes = {
    list : PropTypes.arrayOf(PropTypes.string)
}
 
export default InvoiceList;