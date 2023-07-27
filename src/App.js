import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Modal from "./Components/Modal/Modal";
import CardContainer from "./Components/CardContainer/CardContainer";
import { GlobalContext } from "./utils/Contexts";
import Notification from "./Components/Notification/Notification";
import { createJob, getJobs, updateJob } from "./utils/AxiosRequests";
import { steps } from "./utils/Constants";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(null);
  const [data, setData] = useState(null);
  const [actionType, setActionType] = useState(null);
  const [notificationData, setNotificationData] = useState(null);

  useEffect(() => {
    fetchData();
  }, [notificationData]);

  const fetchData = async () => {
    const data = await getJobs();
    setData(data);
  };

  const setNotification = (
    show,
    message = "",
    type = "success",
    duration = "3000"
  ) => {
    setNotificationData({
      show,
      message,
      type,
      duration,
    });
  };

  const handleSubmit = async (action = "new", formData) => {
    let response = null;
    if (action == "edit") {
      response = await updateJob(formData, formData?.id);
    } else {
      response = await createJob(formData);
    }
    setNotification(true, response?.msg, response?.status);
    setIsModalOpen(false);
  };

  const handleModalToggle = (e, actionType = "new", formData = {}) => {
    setActionType(actionType);
    setFormData(formData);
    setIsModalOpen((prev) => !prev);
  };
  return (
    <div className="m-5">
      <GlobalContext.Provider
        value={{
          handleModalToggle,
          setNotification,
        }}
      >
        <Header handleModalToggle={handleModalToggle} />
        <CardContainer data={data} />
        <Modal isOpen={isModalOpen} onClose={handleModalToggle}>
          <Form
            title={actionType === "edit" ? "Update Job" : "Create a job"}
            steps={steps}
            onSubmit={handleSubmit}
            fieldObject={formData}
            action={actionType}
          />
        </Modal>
        {notificationData?.show && (
          <Notification notificationData={notificationData} />
        )}
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
