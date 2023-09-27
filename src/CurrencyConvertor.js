import React, { useEffect, useState } from "react";
import "./CurrencyConverter.css"; // Import your CSS file

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [exchangeRates, setExchangeRates] = useState(null);
  const [converted, setConverted] = useState(null);

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/0370c9cde9c0ae5fd42c2a82/latest/${fromCur}`
    )
      .then((res) => res.json())
      .then((data) => {
        setExchangeRates(data.conversion_rates);
      });
  }, [fromCur]);

  useEffect(() => {
    if (exchangeRates) {
      const rate = exchangeRates[toCur];
      const result = amount * rate;
      setConverted(result);
    }
  }, [amount, fromCur, toCur, exchangeRates]);

  return (
    <div className="currency-converter">
      <h1>Currency Converter</h1>
      <div className="converter-form">
        <label className="label" htmlFor="input_amount">
          Enter amount
        </label>
        <input
          type="number"
          id="input_amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="currency-input"
        />

        <select
          id="select_from"
          value={fromCur}
          onChange={(e) => setFromCur(e.target.value)}
          className="currency-select"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>

        <select
          id="select_to"
          value={toCur}
          onChange={(e) => setToCur(e.target.value)}
          className="currency-select"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>

        <p className="conversion-result">
          {amount} {fromCur} = {converted} {toCur}
        </p>
      </div>
    </div>
  );
}
