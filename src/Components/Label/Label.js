import React from "react";

const Label = ({ name, required, className, children }) => {
  return (
    <div className={className}>
      <label>{children}</label>
      {required && <span className={`text-error`}>*</span>}
    </div>
  );
};

export default Label;
