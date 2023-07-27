import React from "react";
import Input from "../InputBox/Input";

function RenderInputFields({ field, formData, handleChange }) {
  switch (field.type) {
    case "group":
      return (
        <div className="flex flex-row gap-6 self-stretch">
          {field.fields.map((option) => (
            <div
              key={option.value}
              className="flex flex-col gap-1 self-stretch w-full"
            >
              <label className="font-medium text-sm text-dark">
                {option.label}
              </label>
              <Input
                type={option.type}
                name={`${field.name}.${option.name}`}
                value={formData[field.name]?.[option.name] || ""}
                onChange={handleChange}
                placeholder={option.placeholder}
              />
            </div>
          ))}
        </div>
      );
    case "radio":
      return (
        <div className="flex gap-4 py-2 h-9">
          {field.options.map((option) => (
            <div
              className="flex gap-1 font-normal text-sm text-placeholder"
              key={option.value}
            >
              <input
                type="radio"
                name={field.name}
                value={option.value}
                checked={formData[field.name] === option.value}
                onChange={handleChange}
              />
              {option.label}
            </div>
          ))}
        </div>
      );
    case "textarea":
      return (
        <textarea
          name={field.name}
          value={formData[field.name] || ""}
          onChange={handleChange}
        />
      );
    case "number":
      return (
        <Input
          type={field.type}
          name={field.name}
          value={formData[field.name] || ""}
          onChange={handleChange}
          placeholder={field.placeholder}
        />
      );
    default:
      return (
        <Input
          type={field.type}
          name={field.name}
          value={formData[field?.name] || ""}
          onChange={handleChange}
          placeholder={field.placeholder}
        />
      );
  }
}

export default RenderInputFields;
