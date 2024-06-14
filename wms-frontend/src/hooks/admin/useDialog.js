import { create } from "zustand";

export const useTambahPemilikDialog = create((set) => ({
  isTambahPemilikDialogOpen: false,
  openTambahPemilikDialog: () =>
    set({
      isTambahPemilikDialogOpen: true,
    }),
  closeTambahPemilikDialog: () =>
    set({
      isTambahPemilikDialogOpen: false,
    }),
}));
export const useTambahJenisBahanDialog = create((set) => ({
  isTambahJenisBahanDialogOpen: false,
  openTambahJenisBahanDialog: () =>
    set({
      isTambahJenisBahanDialogOpen: true,
    }),
  closeTambahJenisBahanDialog: () =>
    set({
      isTambahJenisBahanDialogOpen: false,
    }),
}));
export const useTambahNamaBahanDialog = create((set) => ({
  isTambahNamaBahanDialogOpen: false,
  openTambahNamaBahanDialog: () =>
    set({
      isTambahNamaBahanDialogOpen: true,
    }),
  closeTambahNamaBahanDialog: () =>
    set({
      isTambahNamaBahanDialogOpen: false,
    }),
}));
export const useTambahSatuanBahanDialog = create((set) => ({
  isTambahSatuanBahanDialogOpen: false,
  openTambahSatuanBahanDialog: () =>
    set({
      isTambahSatuanBahanDialogOpen: true,
    }),
  closeTambahSatuanBahanDialog: () =>
    set({
      isTambahSatuanBahanDialogOpen: false,
    }),
}));
export const useEditDataBahanDialog = create((set) => ({
  isEditDataBahanDialogOpen: false,
  openEditDataBahanDialog: () =>
    set({
      isEditDataBahanDialogOpen: true,
    }),
  closeEditDataBahanDialog: () =>
    set({
      isEditDataBahanDialogOpen: false,
    }),
}));
export const useDetailAkunDialog = create((set) => ({
  isDetailAkunDialogOpen: false,
  openDetailAkunDialog: () =>
    set({
      isDetailAkunDialogOpen: true,
    }),
  closeDetailAkunDialog: () =>
    set({
      isDetailAkunDialogOpen: false,
    }),
}));
export const useEditDataPemilikDialog = create((set) => ({
  isEditDataPemilikDialogOpen: false,
  openEditDataPemilikDialog: () =>
    set({
      isEditDataPemilikDialogOpen: true,
    }),
  closeEditDataPemilikDialog: () =>
    set({
      isEditDataPemilikDialogOpen: false,
    }),
}));