import React from "react";

const Modal = ({ isOpen, onClose, className, children }) => {
  if (!isOpen) return null;

  const modalContainerClasses =
    "fixed inset-0 flex items-center justify-center z-999 bg-dark/75";
  const modalBackdropClasses = "fixed inset-0 ";
  const modalContentClasses = "bg-card rounded-lg z-10 p-6";

  return (
    <div className={modalContainerClasses}>
      <div className={modalBackdropClasses} onClick={onClose}></div>
      <div className={`${modalContentClasses} ${className}`}>{children}</div>
    </div>
  );
};

export default Modal;
