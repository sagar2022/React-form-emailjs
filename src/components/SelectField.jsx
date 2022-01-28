import React from "react";

const SelectField = (props) => {
  const { label, handleChange, name } = props;

  return (
    <div className="mb-5">
      <label className="text-gray-500 text-sm" htmlFor={name}>
        {label}
      </label>
      <select
        defaultValue="role"
        onChange={handleChange}
        name={name}
        className="w-full border-b-2 py-2 outline-none"
      >
        <option disabled value="role">
          Choose Role
        </option>
        <option value="frontEnd" className="py-1">
          Front-End
        </option>
        <option value="backEnd" className="py-1">
          Back-End
        </option>
        <option value="qa" className="py-1">
          QA
        </option>
      </select>
    </div>
  );
};

export default SelectField;
