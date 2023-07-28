import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../utils/Contexts";
import Label from "../Label/Label";
import RenderInputFields from "./RenderInputFields";

const Form = ({ steps, onSubmit, title, fieldObject, action }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const { setNotification } = useContext(GlobalContext);

  useEffect(() => {
    setFormData(fieldObject);
  }, []);

  const handleNext = (e) => {
    e.preventDefault();
    const currentStepFields = steps[currentStep - 1].fields;
    const requiredFields = currentStepFields.filter((field) => field.required);

    const isAllRequiredFilled = requiredFields.every(
      (field) =>
        formData[field.name] !== undefined && formData[field.name] !== ""
    );

    if (isAllRequiredFilled) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setNotification(
        true,
        "Please fill in all required fields before proceeding.",
        "error"
      );
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.includes(".")) {
      const [parentFieldName, nestedFieldName] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [parentFieldName]: {
          ...prevData[parentFieldName],
          [nestedFieldName]:
            type === "radio" ? (checked ? value : undefined) : value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "radio" ? (checked ? value : undefined) : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(action, formData);
  };

  const getCurrentStepFields = () => {
    const currentStepFields = steps[currentStep - 1].fields;
    return currentStepFields.map((field) => (
      <div className="flex flex-col gap-1 self-stretch" key={field.name}>
        {field.label && (
          <Label
            className="font-medium text-sm text-dark"
            required={field.required}
          >
            {field.label}
          </Label>
        )}
        <RenderInputFields
          field={field}
          handleChange={handleChange}
          formData={formData}
        />
      </div>
    ));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-24">
        <div className="flex flex-col items-start gap-6">
          <div className="flex justify-between w-full">
            <label className="text-xl">{title}</label>
            <label className="text-xl">Step {currentStep}</label>
          </div>
          {getCurrentStepFields()}
        </div>
        <div className="flex justify-end items-center gap-3">
          {currentStep < steps.length && (
            <button onClick={handleNext}>Next</button>
          )}

          {currentStep > 1 && <button onClick={handlePrevious}>Prev</button>}

          {currentStep === steps.length && (
            <button>{action == "edit" ? "Update" : "Save"}</button>
          )}
        </div>
      </div>
    </form>
  );
};

export default Form;
