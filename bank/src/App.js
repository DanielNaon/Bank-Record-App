import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import axios from 'axios'
import Transactions from './components/Transactions'
import Operations from './components/Operations'

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state= {
      bankInfo: []
     
    }
  }
  presentBalance=()=>{
    let finalSum =0
    this.state.bankInfo.forEach(m=> finalSum += parseInt(m.amount))
    console.log(finalSum)
    return finalSum
  }

  componentDidMount=async()=>{
    const allMoneySpend = await axios.get('http://localhost:8000/transcations')
    this.setState({bankInfo: allMoneySpend.data}, function(){
      console.log(this.state.bankInfo)
    })
  }
  // recive the obj from operations update state
  newMoneySpendBank= async(newMoneySpend)=>{
    await axios.post('http://localhost:8000/transcations',newMoneySpend)
    //sending a requse to bring all the data with the new money!!
    let oldMoneyAndNewMoney= await axios.get('http://localhost:8000/transcations')
    await this.setState({ bankInfo : oldMoneyAndNewMoney.data })
  
  }

  render(){
    let turnBalanceOn = this.presentBalance()
   
    return (
      <Router>
     <div className="bank">
        <h1 className="header">Bank-Records App</h1>
        <p className="disc">Welcome To Bank-Record. An App That Allows You To Keep Accurate Records Of Your Money Spending!</p><br></br>
        {turnBalanceOn > 0 ? 
        <div className="balance"> The Balance Is:<div className="green">{turnBalanceOn}</div></div> : 
        <div className="balance"> The Balance Is: <div className="red">{turnBalanceOn}</div></div>} <br></br>
        <div className="container">
          <Link className="operLink" to="/operations">Operations</Link>
          <Route exact path="/operations" exact render={() =><div><Transactions bankInfo={this.state.bankInfo}/><Operations newMoneySpendBank={this.newMoneySpendBank} /></div>}/>
        </div>
     </div>
     </Router>
    );
  }
}

export default App;
