"use client";

import React from "react";

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type = "text",
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="p-2 border rounded w-full"
        aria-label={label}
      />
    </div>
  );
};

export default FormInput;
