import React from "react";

const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
}) => {
  return (
    <>
      <div className="mb-4">
        {label && (
          <label className="block text-sm font-medium mb-1">{label}</label>
        )}

        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-700 placeholder-gray-400 placeholder-opacity-70 :placeholder-gray-300 ${className}`}
        />
      </div>
    </>
  );
};

export default Input;
