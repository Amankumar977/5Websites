import { useId } from "react";
let InputBox = ({
  style,
  readProp,
  label,
  amount,
  selectedCurrency,
  selectOptions = [],
  onCurrencyChange,
  onAmountChange,
}) => {
  let inputId = useId();
  let inputId1 = useId();
  return (
    <div
      className={`bg-[#ffffff] flex
      justify-between items-center p-2 ${style}`}>
      <div className="w-1/2 ">
        <label htmlFor={inputId} className="text-gray-600">
          {label}
        </label>
        <br />
        <input
          readOnly={readProp}
          type="text"
          className="w-1/2 text-2xl mt-1 placeholder:text-black"
          placeholder="Amount"
          id={inputId}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className=" w-1/2">
        <label htmlFor={inputId1} className="text-gray-600">
          Currency Type
        </label>
        <br />
        <select
          name="currencyOptions"
          id={inputId1}
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className={`text-2xl mt-2 w-full bg-gray-100`}>
          {selectOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default InputBox;
