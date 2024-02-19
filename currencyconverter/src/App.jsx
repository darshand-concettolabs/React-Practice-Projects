import React, { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo';


const App = () => {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        convert();
      }}>

        <div>
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => {
              setAmount(amount)
            }}
            onAmountChange={(amount) => {
              setAmount(amount)
            }}
            selectCurrency={from}
          />

          <button
            onClick={swap}
            type="button"> SWAP</button>

          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => {
              setTo(currency)
              selectCurrency = { from }
              amountDisable
            }}
          />

          <button type="submit">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>

        </div>
      </form>
      <h1>Currency Convertor</h1>

    </div>

  )
}

export default App