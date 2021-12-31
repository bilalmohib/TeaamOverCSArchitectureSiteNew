import React from "react";
import "./SimpleDropdown.module.css";

function SimpleDropdown({ title, options }) {
  return (
    <select className="fs-16px simple-select">
      <option value="" class=" ">
        {title}
      </option>

      {options.map(({ title }, index) => (
        <option value={title} class=" ">
          {title}
        </option>
      ))}
    </select>
  );
}

export default SimpleDropdown;
