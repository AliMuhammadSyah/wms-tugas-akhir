import { create } from "zustand";

export const useTambahDataBahanDialog = create((set) => ({
    isTambahDataBahanDialogOpen: false,
    openTambahDataBahanDialog: () =>
      set({
        isTambahDataBahanDialogOpen: true,
      }),
    closeTambahDataBahanDialog: () =>
      set({
        isTambahDataBahanDialogOpen: false,
      }),
  }));
  export const useTambahStokBahanDialog = create((set) => ({
    bahanPayload: {},
    isTambahStokBahanDialogOpen: false,
    openTambahStokBahanDialog: (bahanPayload) =>
      set({
        bahanPayload: bahanPayload,
        isTambahStokBahanDialogOpen: true,
      }),
    closeTambahStokBahanDialog: () =>
      set({
        isTambahStokBahanDialogOpen: false,
      }),
  }));
  export const useKurangiStokBahanDialog = create((set) => ({
    bahanPayload: {},
    isKurangiStokBahanDialogOpen: false,
    openKurangiStokBahanDialog: (bahanPayload) =>
      set({
        bahanPayload: bahanPayload,
        isKurangiStokBahanDialogOpen: true,
      }),
    closeKurangiStokBahanDialog: () =>
      set({
        isKurangiStokBahanDialogOpen: false,
      }),
  }));
  export const useEditDataBahanDialog = create((set) => ({
    editBahanPayload: {},
    isEditDataBahanDialogOpen: false,
    openEditDataBahanDialog: (editBahanPayload) =>
      set({
        editBahanPayload: editBahanPayload,
        isEditDataBahanDialogOpen: true,
      }),
    closeEditDataBahanDialog: () =>
      set({
        isEditDataBahanDialogOpen: false,
      }),
  }));
  export const useMintaTambahDataBahanDialog = create((set) => ({
    isMintaTambahDataBahanDialogOpen: false,
    openMintaTambahDataBahanDialog: () =>
      set({
        isMintaTambahDataBahanDialogOpen: true,
      }),
    closeMintaTambahDataBahanDialog: () =>
      set({
        isMintaTambahDataBahanDialogOpen: false,
      }),
  }));
  