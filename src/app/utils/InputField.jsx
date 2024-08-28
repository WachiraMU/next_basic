import React from 'react';

const InputField = ({ label, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-black">{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    />
  </div>
);

export default InputField;
