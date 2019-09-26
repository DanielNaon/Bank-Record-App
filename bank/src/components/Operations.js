import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Operations extends Component {
  constructor(){
    super()
    this.state= {
      amount: '',
      category:'',
      vendor:''
    }
  }

  changeAmount=(event)=>{
    let amount = event.target.value
    this.setState({amount})
  }

  changeCategoty=(event)=>{
    let category = event.target.value
    this.setState({category})
  }

  changeVendor=(event)=>{
    let vendor= event.target.value
    this.setState({vendor})
  }

  newMoneySpendBank=(event)=>{
    {event.target.value === "Deposit" ? 
     this.props.newMoneySpendBank({amount: 0+ parseInt(this.state.amount),category: this.state.category ,vendor: this.state.vendor  })
    : this.props.newMoneySpendBank({amount: 0 - parseInt(this.state.amount),category: this.state.category ,vendor: this.state.vendor  })
    }
  }

  alertPoverty=()=>{
    alert("Relax! You aint rothschild $")
  }

  render(){
    let newMoneyInvokation = this.newMoneyInvokation
    return (
   <div>
      <div className="inputsContainer">
         <input className="input" type="number" placeholder="Amount:" value={this.state.amount} onChange={this.changeAmount}></input>
         <input  className="input" type="text" placeholder="Vendor:" value={this.state.vendor} onChange={this.changeVendor}></input>
         <input  className="input" type="text" placeholder="Category:" value={this.state.category} onChange={this.changeCategoty}></input>
      </div>
      <div className="buttonsContainer">
          <button className="button" value="Deposit" onClick={this.newMoneySpendBank}>Deposit</button>
          {this.state.amount < 500 ?
          <button className="button" value ="Withdraw" onClick={this.newMoneySpendBank}>Withdraw</button> :
          <button className="button" value="withdraw" onClick={this.alertPoverty}>withdraw</button>}
      </div>
   </div>
    );
  }
}

export default Operations;