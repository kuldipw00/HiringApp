import axios from "axios";
import { API_END_POINT } from "./Constants";

export const createJob = async (formObject) => {
  try {
    await axios.post(API_END_POINT + "/job", formObject);
    const resp = {
      msg: "Job created successfully!!",
      status: "success",
    };
    return resp;
  } catch (error) {
    console.error("Error making POST request:", error);
    return {
      msg: "Error making POST request",
      status: "error",
    };
  }
};
export const updateJob = async (formObject, id) => {
  try {
    await axios.put(API_END_POINT + "/job/" + id, formObject);
    const resp = {
      msg: "Job updated successfully!!",
      status: "success",
    };
    return resp;
  } catch (error) {
    console.error("Error making PUT request:", error);
    return {
      msg: "Error making UPDATE request",
      status: "error",
    };
  }
};

export const getJobs = async () => {
  try {
    const response = await axios.get(API_END_POINT + "/job");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("error in fetching data", error);
  }
};

export const deleteJob = async (id) => {
  try {
    await axios.delete(API_END_POINT + "/job/" + id);
    const resp = {
      msg: "Job deleted successfully!!",
      status: "success",
    };
    return resp;
  } catch (error) {
    console.error("Error making DELETE request:", error);
    return {
      msg: "Error making DELETE request",
      status: "error",
    };
  }
};
