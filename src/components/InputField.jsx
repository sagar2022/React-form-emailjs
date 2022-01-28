import React from "react";

const InputField = (props) => {
  const { label, name, type, placeholder, handleChange, value } = props;

  return (
    <div className="mb-5">
      <label className="text-gray-500 text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        className="border-b-2 outline-none text-gray-700 w-full bg-gray-100 h-10 px-2"
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        required
      />
    </div>
  );
};

export default InputField;
