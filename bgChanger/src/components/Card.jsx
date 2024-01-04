import { useState } from "react";

let Card = () => {
  const [color, setColor] = useState("Red");

  // Reusable function to handle color changes
  const changeColor = (newColor) => {
    setColor(newColor);
  };

  const renderColorButton = (btnColor, btnLabel) => (
    <button
      style={{ backgroundColor: `${btnColor}` }}
      className={` text-white px-4 py-4 rounded-lg`}
      onClick={() => changeColor(btnColor)}>
      {btnLabel}
    </button>
  );

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="bg-white rounded-xl h-16 flex justify-evenly items-center mx-20">
        {renderColorButton("red", "Red")}
        {renderColorButton("blue", "Blue")}
        {renderColorButton("green", "Green")}
        {renderColorButton("pink", "Pink")}
        {renderColorButton("yellow", "Yellow")}
        {renderColorButton("purple", "Purple")}
        {renderColorButton("gray", "Gray")}
        {renderColorButton("violet", "Violet")}
      </div>
    </div>
  );
};

export default Card;
