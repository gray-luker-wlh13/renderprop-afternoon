import React, { Component } from 'react';
import './App.css';
import CurrencyConverter from './Components/CurrencyConverter';
import CurrencyDisplay from './Components/CurrencyDisplay';

class App extends Component {
  render() {
    return (
      <>
        <CurrencyConverter render={(currencyData, amount) => (
            <CurrencyDisplay currencyData={currencyData} amount={amount}/>
        )}/>
      </>
    );
  }
}

export default App;
