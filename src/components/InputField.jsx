import React from "react";

const InputField = (props) => {
  return (
    <label className="enterCelsius">
      Enter Temperature in Celsius:
      <input type="number" value={props.itsvalue} onChange={props.onchange} />
    </label>
  );
};

export default InputField;
