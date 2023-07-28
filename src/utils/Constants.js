export const API_END_POINT = "https://64bfd3dc0d8e251fd1118704.mockapi.io/api";
export const steps = [
  {
    title: "Step 1",
    fields: [
      {
        name: "jobTitle",
        value: "Yahoooo",
        label: "Job Title",
        type: "text",
        required: true,
        placeholder: "ex. UX UI Designer",
      },
      {
        name: "companyName",
        label: "Company Name",
        type: "text",
        required: true,
        placeholder: "ex. Google",
      },
      {
        name: "industry",
        label: "Industry",
        type: "text",
        required: true,
        placeholder: "ex. Information Technology ",
      },
      {
        name: "location",
        type: "group",
        fields: [
          {
            name: "location",
            label: "Location",
            type: "text",
            placeholder: "ex. Chennai",
          },
          {
            name: "remoteType",
            label: "Remote Type",
            type: "text",
            placeholder: "ex. In-office",
          },
        ],
      },
    ],
  },
  {
    title: "Step 2",
    fields: [
      {
        name: "experience",
        label: "Experience",
        type: "group",
        fields: [
          { name: "Minimum", type: "text", placeholder: "Minimum" },
          { name: "Maximum", type: "text", placeholder: "Maximum" },
        ],
      },
      {
        name: "salary",
        label: "Salary",
        type: "group",
        fields: [
          { name: "Minimum", type: "text", placeholder: "Minimum" },
          { name: "Maximum", type: "text", placeholder: "Maximum" },
        ],
      },
      {
        name: "totalEmployees",
        label: "Total Employees",
        type: "text",
        placeholder: "ex. 100",
      },
      {
        name: "applyType",
        label: "Apply Type",
        type: "radio", // Use radio type for Apply Type field
        options: [
          { value: "quick", label: "Quick Apply" },
          { value: "external", label: "External Apply" },
        ],
      },
    ],
  },
  // Add additional steps here if needed.
];
