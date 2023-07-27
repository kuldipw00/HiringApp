import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../utils/Contexts";

const Notification = ({ notificationData }) => {
  const { show, message, type, duration } = notificationData;
  const { setNotification } = useContext(GlobalContext);

  useEffect(() => {
    if (show) {
      // Automatically hide the notification after the specified duration
      const timer = setTimeout(() => {
        setNotification(false);
      }, duration);

      // Clean up the timer on unmount or when show changes to false
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setNotification(false);
  };

  return show ? (
    <div className="fixed top-12 right-6 lex items-center justify-center z-[999] rounded-lg">
      <div
        className={`${
          type == "error" ? "bg-error" : "bg-green"
        } rounded shadow-lg relative`}
      >
        <button
          className="absolute top-0 right-0 m-1 p-0 text-dark bg-opacity-0"
          onClick={handleClose}
        >
          &times;
        </button>
        <p className="text-card text-sm p-5">{message}</p>
      </div>
    </div>
  ) : null;
};

export default Notification;
