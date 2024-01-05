import { InputBox, Button } from "./Components/index.js";
import ConvertedCurrInfo from "./hooks/ConvertedCurrInfo.js";
import { useState, useEffect } from "react";
function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  let currencyInfo = ConvertedCurrInfo(fromCurrency);
  let options = Object.keys(currencyInfo);
  const swap = () => {
    // Swap currencies
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    // Swap amounts using a temporary variable
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  let convert = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency]);
  };
  return (
    <div
      className="flex flex-wrap justify-center w-full items-center h-[100vh] bg-no-repeat bg-cover  font-mono absolute "
      style={{
        background: `url('${"https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=1800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3VycmVuY3klMjBleGNoYW5nZXxlbnwwfHwwfHx8MA%3D%3D"}')`,
      }}>
      <div className="bg-white/30  p-4 rounded-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
          <InputBox
            label={"from"}
            amount={amount}
            selectedCurrency={fromCurrency}
            selectOptions={options}
            onCurrencyChange={(currency) => {
              setFromCurrency(currency);
            }}
            onAmountChange={(amount) => {
              setAmount(amount);
            }}
          />
          <Button
            text={"swap"}
            type={"button"}
            style={"p-1 relative left-36 -top-2 z-10"}
            change={swap}
            change1={convert}
          />
          <InputBox
            style={"relative -top-4 outline-none"}
            label={"to"}
            readProp={"readOnly"}
            amount={convertedAmount}
            selectedCurrency={toCurrency}
            selectOptions={options}
            onCurrencyChange={(currency) => {
              setToCurrency(currency);
            }}
          />
          <Button
            text={"Convert INR to USD"}
            style={"mt-2 w-full py-2"}
            type={"submit"}
          />
        </form>
      </div>
    </div>
  );
}

export default App;
