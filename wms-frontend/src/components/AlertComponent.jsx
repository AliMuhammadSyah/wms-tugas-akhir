import { useEffect } from "react";
import { useAlert } from "../hooks/useAlert";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'

const AlertComponent = () => {
  const { isAlertOpen, type, title, message } = useAlert();

  useEffect(() => {
    if (isAlertOpen === true) {
      Swal.fire({
        position: "center",
        icon: type === "error" ? "error" : "success",
        title: title,
        text: message,
        showConfirmButton: false,
        timer: 2000,
        didClose: () => {
          window.location.reload();
        },
      });
    }
  }, [isAlertOpen, message, title, type]);

  return null;
};

export default AlertComponent;
