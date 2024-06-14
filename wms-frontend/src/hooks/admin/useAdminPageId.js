import { create } from "zustand";

export const useAdminPageId = create((set) => ({
  adminPageId: 1,
  handleChangeAdminPageId: (adminPageId) =>
    set({
      adminPageId: adminPageId,
    }),
}));
