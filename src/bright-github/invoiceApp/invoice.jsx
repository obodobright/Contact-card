import React from 'react';
import InvoiceList from './invoiceList';
import './invoice.css'
import Navbar from './navbar'
class Invoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        bills : [{
            id: 1,
            name:'Huang',
            date: '19th August 2021',
            amount : '1,800.90',
            code : '#RT3080',
            status:  'Paid'
        },
        { id: 2,
            name:'Huang',
            date: '19th August 2021',
            amount : '1,800.90',
            code : '#RT3080',
            status:  'Pending'
        },
        {id: 3,
            name:'Huang',
            date: '19th August 2021',
            amount : '1,800.90',
            code : '#RT3080',
            status:  'Paid'
        },
        {
            id: 4,
            name:'Huang',
            date: '19th August 2021',
            amount : '1,800.90',
            code : '#RT3080',
            status:  'Pending'
        },
        {
            id: 5,
            name:'Huang',
            date: '19th August 2021',
            amount : '1,800.90',
            code : '#RT3080',
            status:  'Paid'
        },
        {
            id: 6,
            name:'Huang',
            date: '19th August 2021',
            amount : '1,800.90',
            code : '#RT3080',
            status:  'Pending'
        },
        
    ],
    isClicked : "No"
         }

         this.addNewInvoice = this.addNewInvoice.bind(this)
         this.handleIsClicked = this.handleIsClicked.bind(this)
         this.handleHide = this.handleHide.bind(this)
    }
    handleIsClicked(){
        console.log('clicked')
        this.setState({
            isClicked: 'yes'
        })
    }
    addNewInvoice(name,date,amount,code,status){
        this.setState((currentState)=>{
            return{
                bills: currentState.bills.concat([{
                 name,
                 date,
                 amount,
                 code,
                 status
                }]),
            }
        })
        
    }
    handleHide(){
        console.log('hide')
    }
   
    render() { 
        
        return ( 
            <React.Fragment>
            <Navbar />
            <div className="invoiceContainer">
            
            <InvoiceList list={this.state.bills} handleIsClicked = {this.handleIsClicked} isClicked={this.state.isClicked} handleNewTodo = {this.addNewInvoice}/>
                
            </div>
            </React.Fragment>
            
         );
    }
}

 
export default Invoice;