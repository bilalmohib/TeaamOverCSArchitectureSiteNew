import React from "react";
import "./SimpleDropdown.module.css";

function SimpleDropdown({ title, options, onChange }) {
  // const [selectedClient, setSelectedClient] = React.useState("one"); //default value

  // function handleSelectChange(event) {
  //   setSelectedClient(event.target.value);
  // }
  return (
    <select className="fs-16px simple-select" onChange={onChange}>
      <option value="">
        {title}
      </option>

      {options.map(({ title }, index) => (
        <option key={index} value={title}>
          {title}
        </option>
      ))}
    </select>
  );
}

export default SimpleDropdown;
