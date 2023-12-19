import React, { useState } from "react";
import InputField from "./InputField";
import Buttons from "./Buttons";

const TemperatureConverter = () => {
  const [userInput, setuserInput] = useState("");
  const [convertedTemp, setconvertedTemp] = useState("");

  const handleInputChange = (e) => {
    setuserInput(e.target.value);
  };

  const convertToFahrenheit = () => {
    const celsius = parseFloat(userInput);
    if (!isNaN(celsius)) {
      const fahrenheit = (celsius * 9) / 5 + 32;
      setconvertedTemp(`Fahrenheit: ${fahrenheit}°F`);
    } else {
      setconvertedTemp("Invalid input. Please enter a valid number.");
    }
  };

  const convertToKelvin = () => {
    const celsius = parseFloat(userInput);
    if (!isNaN(celsius)) {
      const kelvin = celsius + 273.15;
      setconvertedTemp(`Kelvin: ${kelvin}K`);
    } else {
      setconvertedTemp("Invalid input. Please enter a valid number.");
    }
  };

  return (
    <div className="tempConvertorPage">
      <h2>Temperature Converter</h2>
      <InputField itsvalue={userInput} onchange={handleInputChange} />
      <Buttons onclickF={convertToFahrenheit} onclickK={convertToKelvin} />
      <div>{convertedTemp}</div>
    </div>
  );
};

export default TemperatureConverter;
