import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Transaction from './Transaction'
class Transactions extends Component {
  constructor(){
    super()
    this.state= {

    }
  }
  render(){
    return (
      <div className="bank">
          <Transaction bankInfo={this.props.bankInfo}/>
        </div>
    );
  }
}

export default Transactions;