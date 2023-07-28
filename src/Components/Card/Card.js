import React, { useContext } from "react";
import Label from "../Label/Label";
import iconImage from "../../utils/Images/netflix_icon.png";
import { ReactComponent as EditIcon } from "../../utils/Images/pencil.svg";
import { ReactComponent as DeletIcon } from "../../utils/Images/trash.svg";
import { GlobalContext } from "../../utils/Contexts";
import { deleteJob } from "../../utils/AxiosRequests";

const Card = ({ fields, className }) => {
  const { handleModalToggle, setNotification } = useContext(GlobalContext);
  const {
    jobTitle,
    companyName,
    applyType,
    experience,
    industry,
    location,
    salary,
    totalEmployees,
  } = fields;

  const handleDelete = async (id) => {
    const response = await deleteJob(id);
    setNotification(true, response?.msg, response.status);
  };
  return (
    <div
      className={`font-normal self-stretch gap-[10px] border border-gray px-6 py-4 text-base ${className}`}
    >
      <div className="flex justify-between self-stretch">
        <div className="flex gap-2">
          <div className="">
            <img src={iconImage} alt="Icon" />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <Label className="text-2xl">{jobTitle}</Label>
              <Label className="font-normal">
                {companyName} - {industry}
              </Label>
              <Label className="text-placeholder">
                {location?.location} ({location?.remoteType})
              </Label>
            </div>
            <div className="flex flex-col gap-2 text-lightFont">
              <Label>Part-Time (9.00 am - 5.00 pm IST)</Label>
              <Label>
                Experience ({experience?.Minimum} - {experience?.Maximum} years)
              </Label>
              <Label>
                INR (₹) {salary.Minimum} - {salary.Maximum} / Month
              </Label>
              <Label>{totalEmployees} employees</Label>
            </div>
            <div>
              {applyType == "external" ? (
                <button className="bg-card text-primary border border-primary">
                  External Apply
                </button>
              ) : (
                <button>Apply Now</button>
              )}
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="px-2">
            <EditIcon
              onClick={(e) => handleModalToggle(e, "edit", fields)}
              className="cursor-pointer"
            />
          </div>

          <div className="px-2">
            <DeletIcon
              onClick={() => handleDelete(fields.id)}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
