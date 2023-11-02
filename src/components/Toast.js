import { useEffect, useRef } from "react";
import {
  IconAlertCircleFilled,
  IconCircleCheckFilled,
  IconCircleXFilled,
  IconInfoCircleFilled,
  IconX,
} from "@tabler/icons-react";
import { useToast } from "../hooks/useToast";

const toastTypes = {
  success: {
    icon: <IconCircleCheckFilled />,
    iconClass: "success-icon",
    progressBarClass: "success",
  },
  warning: {
    icon: <IconAlertCircleFilled />,
    iconClass: "warning-icon",
    progressBarClass: "warning",
  },
  info: {
    icon: <IconInfoCircleFilled />,
    iconClass: "info-icon",
    progressBarClass: "info",
  },
  error: {
    icon: <IconCircleXFilled />,
    iconClass: "error-icon",
    progressBarClass: "error",
  },
};

const Toast = ({ message, type, id }) => {
  const { toastClass, icon, iconClass } = toastTypes[type];
  const toast = useToast();

  const timerID = useRef(null);

  const handleDismiss = () => {
    toast.remove(id);
  };

  // useEffect(() => {
  //   timerID.current = setTimeout(() => {
  //     handleDismiss();
  //   }, 4000);

  //   return () => {
  //     clearTimeout(timerID.current);
  //   };
  // }, []);

  return (
    <div className={`toast ${toastClass}`}>
      <span className={iconClass}>{icon}</span>
      <p className="toast-message">{message}</p>
      <button className="dismiss-btn" onClick={handleDismiss}>
        <IconX size={18} color="#aeb0d7" />
      </button>
    </div>
  );
};

export default Toast;
