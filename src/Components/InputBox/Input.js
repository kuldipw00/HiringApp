import React from "react";

const Input = ({ type, name, value, onChange, placeholder, className }) => {
  return (
    <div className="text-placeholder text-sm font-normal border-[1px] border-cardBorder rounded-[5px]">
      <input
        className={"w-full h-full px-3 py-2 text-dark rounded-[5px]"}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
