import React from "react";

const TextArea = (props) => {
  const { handleChange, label, name, value } = props;

  return (
    <div>
      <label className="text-gray-500 text-sm" htmlFor={name}>
        {label}
      </label>
      <textarea
        onChange={handleChange}
        name={name}
        value={value}
        rows="4"
        className="w-full border-b-2 outline-none bg-gray-100 p-2"
      ></textarea>
    </div>
  );
};

export default TextArea;
