import React, { useState } from "react";
import { AddCircle, Delete, Edit } from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
  FormControl,
} from "@mui/material";
import {
  useTambahJenisBahanDialog,
  useTambahNamaBahanDialog,
  useTambahSatuanBahanDialog,
  useEditDataBahanDialog,
} from "../../../hooks/admin/useDialog";
import TambahJenisBahanDialog from "../FormDialogs/TambahJenisBahanDialog";
import TambahNamaBahanDialog from "../FormDialogs/TambahNamaBahan";
import TambahSatuanBahanDialog from "../FormDialogs/TambahSatuanBahanDialog";
import EditDataBahanDialog from "../FormDialogs/EditDataBahanDialog";

const ManajemenDataBahan = () => {
  const { openTambahJenisBahanDialog } = useTambahJenisBahanDialog();
  const { openTambahNamaBahanDialog } = useTambahNamaBahanDialog();
  const { openTambahSatuanBahanDialog } = useTambahSatuanBahanDialog();
  const { openEditDataBahanDialog } = useEditDataBahanDialog();

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleOpenDeleteDialog = (item) => {
    setSelectedItem(item);
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
    setSelectedItem(null);
  };

  const handleConfirmDelete = async () => {
    setIsLoading(true);
    try {
      // Perform delete operation here
      console.log("Item deleted", selectedItem);
      // Update state after deletion
      setIsDeleteDialogOpen(false);
      setSelectedItem(null);
    } catch (e) {
      setError("Failed to delete item.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEntriesChange = (event) => {
    setEntriesPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleEditItem = (item) => {
    setSelectedItem(item);
    openEditDataBahanDialog(); // Buka dialog edit saat item dipilih
  };

  const handleEditDataBahanClose = () => {
    setSelectedItem(null);
  };

  const data = [
    { id: 1, jenis: "Kayu", nama: "Kayu Jati", satuan: "m" },
    { id: 2, jenis: "Paku", nama: "Paku Payung", satuan: "ons" },
    { id: 3, jenis: "Lem", nama: "Lem Rajawali", satuan: "pcs" },
    { id: 4, jenis: "Karet", nama: "Karet Ban", satuan: "m" },
  ];

  const filteredData = data.filter((item) =>
    item.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  return (
    <div className="container mx-auto p-4">
      <style>
        {`
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #fdfcfc;
          }
        `}
      </style>
      <TambahJenisBahanDialog />
      <TambahNamaBahanDialog />
      <TambahSatuanBahanDialog />
      <EditDataBahanDialog
        isEditDialogOpen={Boolean(selectedItem)} // Buka dialog edit jika ada item yang dipilih
        closeEditDataBahanDialog={handleEditDataBahanClose} // Fungsi untuk menutup dialog edit
        item={selectedItem}
      />
      <h1 className="text-2xl mb-6 font-semibold tracking-wider">
        Manajemen Data Bahan
      </h1>
      <div className="mb-4 flex justify-between items-center">
        <TextField
          label="Cari Bahan"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="ml-auto flex items-center gap-4">
          <FormControl variant="outlined" size="small">
            <label
              htmlFor="entriesPerPage"
              className="text-gray-500 font-bold mb-1"
            >
              Show Entries:
            </label>
            <select
              id="entriesPerPage"
              className="form-select block w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={entriesPerPage}
              onChange={handleEntriesChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </FormControl>
        </div>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-800 bg-gray-200">
        <thead>
          <tr className="bg-gray-400">
            <th className="border border-gray-600 px-3 py-1 text-center">No</th>
            <th className="border border-gray-600 px-3 py-1 text-center">Jenis Bahan</th>
            <th className="border border-gray-600 px-3 py-1 text-center">Nama Bahan</th>
            <th className="border border-gray-600 px-3 py-1 text-center">Satuan</th>
            <th colSpan={2} className="border border-gray-600 px-3 py-1 text-center">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={item.id}>
              <td className="border border-gray-600 px-3 py-1 text-center">
                {index + 1 + (currentPage - 1) * entriesPerPage}
              </td>
              <td className="border border-gray-600 px-3 py-1 text-center"> {item.jenis}</td>
              <td className="border border-gray-600 px-3 py-1 text-center">{item.nama}</td>
              <td className="border border-gray-600 px-3 py-1 text-center">{item.satuan}</td>
              <td className="border border-gray-600 px-3 py-1 text-left">
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditItem(item)}
                    className="flex-1 py-2 transition-colors duration-150 rounded-md text-sm leading-none flex items-center justify-center gap-1 bg-green-400 hover:bg-green-600 text-white"
                  >
                    <Edit fontSize="small" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleOpenDeleteDialog(item.nama)}
                    className="flex-1 py-2 transition-colors duration-150 rounded-md text-sm leading-none flex items-center justify-center gap-1 bg-red-400 hover:bg-red-600 text-white"
                  >
                    <Delete fontSize="small" />
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <div className="p-1 flex justify-between items-center gap-3">
          <button
            onClick={openTambahJenisBahanDialog}
            className="py-2 px-4 flex items-center bg-green-600 hover:bg-green-800 transition duration-150 rounded text-white text-sm leading-none"
          >
            <AddCircle fontSize="small" />{" "}
            <p className="ml-5">Tambah Jenis Bahan</p>
          </button>
          <button
            onClick={openTambahNamaBahanDialog}
            className="py-2 px-4 flex items-center bg-red-600 hover:bg-red-800 transition duration-150 rounded text-white text-sm leading-none"
          >
            <AddCircle fontSize="small" className="mr-2" />
            <span className="ml-2">Tambah Nama Bahan</span>
          </button>

          <button
            onClick={openTambahSatuanBahanDialog}
            className="py-2 px-4 flex items-center bg-yellow-400 hover:bg-yellow-600 transition duration-150 rounded text-white text-sm leading-none"
          >
            <AddCircle fontSize="small" />{" "}
            <p className="ml-2">Tambah Satuan Bahan</p>
          </button>
        </div>
        <div className="flex justify-end items-center mt-4 space-x-2">
          <button
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            className={`py-1 px-3 bg-blue-600 hover:bg-blue-800 text-white rounded-sm ${currentPage === 1 && 'cursor-not-allowed opacity-50'}`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="page-number border border-gray-300 rounded-sm px-3 py-1">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
            className={`py-1 px-3 bg-blue-600 hover:bg-blue-800 text-white rounded-sm ${currentPage === totalPages && 'cursor-not-allowed opacity-50'}`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      <Dialog
        open={isDeleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Konfirmasi Hapus"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Apakah Anda yakin ingin menghapus item {selectedItem?.nama} ini?
          </DialogContentText>
          {error && <div>Error: {error}</div>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            Batal
          </Button>
          <Button
            onClick={handleConfirmDelete}
            color="primary"
            autoFocus
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Hapus"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ManajemenDataBahan;

