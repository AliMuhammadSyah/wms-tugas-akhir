import { create } from "zustand";

export const useAlert = create((set) => ({
  isAlertOpen: false,
  type: "",
  title: "",
  message: "",
  openAlert: ({
    type: type = "success",
    title: title = "",
    message: message = "",
  }) =>
    set({
      isAlertOpen: true,
      type: type,
      title: title,
      message: message,
    }),
  closeAlert: () =>
    set({
      isAlertOpen: false,
    }),
}));
