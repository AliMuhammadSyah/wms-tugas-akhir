import { create } from "zustand";

export const usePemilikPageId = create((set) => ({
  pemilikPageId: 1,
  handleChangePemilikPageId: (pemilikPageId) =>
    set({
      pemilikPageId: pemilikPageId,
    }),
}));
