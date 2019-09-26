import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Transaction extends Component {
  constructor(){
    super()
    this.state= {

    }
  }
  render(){
    return (
    
        <div className="bankConatiner">
          {this.props.bankInfo.map(m=><div className="bankInfo">Amount: {m.amount} Vendor: {m.vendor} Category: {m.category}</div>)}
        </div>
      
    );
  }
}

export default Transaction;