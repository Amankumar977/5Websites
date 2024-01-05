import { useState, useEffect } from "react";
import { InputBox } from "./components";
import useCurrencyConvertor from "./hooks/useCurrencyConvertor";
// ... (import statements)

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyConvertor(fromCurrency);

  // Check if currencyInfo is available
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount); // Set convertedAmount first
    setAmount(convertedAmount); // Then set amount to the new convertedAmount
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center font-mono text-2xl"
      style={{
        backgroundImage: `url('${"https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=1800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3VycmVuY3klMjBleGNoYW5nZXxlbnwwfHwwfHx8MA%3D%3D"}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}>
            {options.length > 0 && ( // Only render when options are available
              <>
                <div className="w-full mb-1">
                  <InputBox
                    label="From"
                    amount={amount}
                    onCurrencyChange={(currency) => {
                      setFromCurrency(currency);
                    }}
                    currencyOptions={options}
                    onAmountChange={(amount) => setAmount(amount)}
                    selectCurrency={fromCurrency}
                  />
                </div>
                <div className="relative w-full h-0.5">
                  <button
                    onClick={swap}
                    type="button"
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
                    swap
                  </button>
                </div>
                <div className="w-full mt-1 mb-4">
                  <InputBox
                    label="To"
                    amount={convertedAmount}
                    onCurrencyChange={(currency) => {
                      setToCurrency(currency);
                    }}
                    currencyOptions={options}
                    selectCurrency={toCurrency}
                    amountDisable
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                  Convert {fromCurrency.toUpperCase()} to{" "}
                  {toCurrency.toUpperCase()}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
