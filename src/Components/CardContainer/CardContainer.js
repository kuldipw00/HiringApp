import React from "react";
import Card from "../Card/Card";

const CardContainer = ({ data }) => (
  <div className="flex flex-wrap items-start gap-20">
    {data?.map((fields) => (
      <Card fields={fields} className="w-[740px]" />
    ))}
  </div>
);

export default CardContainer;
