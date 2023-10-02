import React, { useEffect, useState } from "react";
import "./CurrencyConverter.css";
import { AbortController } from "abort-controller";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [exchangeRates, setExchangeRates] = useState(null);
  const [converted, setConverted] = useState(null);
  const [currencyOptions, setCurrencyOptions] = useState([]);

  const controller = new AbortController(); // Create an AbortController instance

  // Define an async function to fetch exchange rates
  const fetchExchangeRates = async () => {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/0370c9cde9c0ae5fd42c2a82/latest/${fromCur}`,
        {
          signal: controller.signal,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch exchange rates.");
      }

      const data = await response.json();
      setExchangeRates(data.conversion_rates);

      const options = Object.keys(data.conversion_rates);
      setCurrencyOptions(options);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch request aborted.");
      } else {
        console.error("Error fetching exchange rates:", error);
      }
    }
  };

  useEffect(() => {
    setExchangeRates(null);
    setCurrencyOptions([]);

    fetchExchangeRates();
  }, [fromCur]);

  useEffect(() => {
    if (exchangeRates) {
      const rate = exchangeRates[toCur];
      const result = amount * rate;
      setConverted(result.toFixed(2));
    }
  }, [amount, fromCur, toCur, exchangeRates]);

  useEffect(() => {
    return () => {
      controller.abort();
    };
  }, []);

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
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <select
          id="select_to"
          value={toCur}
          onChange={(e) => setToCur(e.target.value)}
          className="currency-select"
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <p className="conversion-result">
          {amount} {fromCur} = {converted} {toCur}
        </p>
      </div>
    </div>
  );
}
