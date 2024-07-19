import { useState } from "react";
import { AddCircle, AddComment, Delete, Edit, RemoveCircle } from "@mui/icons-material";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField, FormControl, Checkbox } from "@mui/material";
import { useTambahDataBahanDialog, useTambahStokBahanDialog, useKurangiStokBahanDialog, useEditDataBahanDialog, useMintaTambahDataBahanDialog } from "../../../hooks/pemilik/useDialog";
import TambahDataBahanDialog from "../FormDialogs/TambahDataBahanDialog";
import TambahStokBahanDialog from "../FormDialogs/TambahStokBahanDialog";
import KurangiStokBahanDialog from "../FormDialogs/KurangiStokBahanDialog";
import EditDataBahanDialog from "../FormDialogs/EditDataBahanDialog";
import MintaTambahDataBahanDialog from "../FormDialogs/MintaTambahDataBahanDialog";

const ManajemenBahan = () => {
  const { openTambahDataBahanDialog } = useTambahDataBahanDialog();
  const { openTambahStokBahanDialog } = useTambahStokBahanDialog();
  const { openKurangiStokBahanDialog } = useKurangiStokBahanDialog();
  const { openEditDataBahanDialog } = useEditDataBahanDialog();
  const { openMintaTambahDataBahanDialog } = useMintaTambahDataBahanDialog();

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleOpenDeleteDialog = (item) => {
    setSelectedItem(item);
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
    setSelectedItem(null);
  };

  const handleConfirmDelete = () => {
    console.log("Item deleted", selectedItem);
    setIsDeleteDialogOpen(false);
    setSelectedItem(null);
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

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedItems(data.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (event, id) => {
    if (event.target.checked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    }
  };

  const data = [
    { id: 1, jenis: "Kayu", nama: "Kayu Jati", jumlah: 10, satuan: "m", keterangan: "Kayu" },
    { id: 2, jenis: "Paku", nama: "Paku Payung", jumlah: 15, satuan: "ons", keterangan: "Logam" },
    { id: 3, jenis: "Lem", nama: "Lem Kayu", jumlah: 5, satuan: "pcs", keterangan: "Kimia" },
    { id: 4, jenis: "karet", nama: "Karet Ban", jumlah: 5, satuan: "m", keterangan: "Karet" },
    { id: 5, jenis: "Kayu", nama: "Kayu Sengon", jumlah: 15, satuan: "m", keterangan: "Kayu" },
    { id: 6, jenis: "Lem", nama: "Lem Super", jumlah: 5, satuan: "pcs", keterangan: "Kimia" },
    { id: 7, jenis: "Cat", nama: "Pernis", jumlah: 5, satuan: "kaleng", keterangan: "Kimia" },
    { id: 8, jenis: "Lem", nama: "Lem Rajawali", jumlah: 5, satuan: "pcs", keterangan: "Kimia" },
  ];

  const filteredData = data.filter((item) =>
    item.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedData = entriesPerPage === "All"
    ? filteredData
    : filteredData.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage);

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
      <TambahDataBahanDialog />
      <TambahStokBahanDialog />
      <KurangiStokBahanDialog />
      <EditDataBahanDialog selectedItem={selectedItem} />
      <MintaTambahDataBahanDialog />
      <h1 className="text-2xl mb-6 font-semibold tracking-wider">Manajemen Data Bahan</h1>
      <div className="mb-4 flex items-center gap-4">
        <TextField
          label="Cari Bahan"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="ml-auto flex items-center gap-4">
          <FormControl variant="outlined" size="small">
            <label htmlFor="entriesPerPage" className="text-gray-500 font-bold mb-1">
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

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-800 bg-gray-200">
          <thead>
            <tr className="bg-gray-400">
              <th className="border border-gray-600 px-2 py-1 text-center">
                <Checkbox
                  checked={selectedItems.length === filteredData.length}
                  indeterminate={selectedItems.length > 0 && selectedItems.length < filteredData.length}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="border border-gray-600 px-2 py-1 text-center">No</th>
              <th className="border border-gray-600 px-2 py-1 text-center">Jenis Bahan</th>
              <th className="border border-gray-600 px-2 py-1 text-center">Nama Bahan</th>
              <th className="border border-gray-600 px-2 py-1 text-center">Jumlah</th>
              <th className="border border-gray-600 px-2 py-1 text-center">Satuan</th>
              <th className="border border-gray-600 px-2 py-1 text-center">Keterangan</th>
              <th colSpan={2} className="border border-gray-600 px-2 py-1 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={item.id}>
                <td className="border border-gray-600 px-2 py-1 text-center">
               
                  <Checkbox
                    checked={selectedItems.includes(item.id)}
                    onChange={(event) => handleSelectItem(event, item.id)}
                  />
                </td>
                <td className="border border-gray-600 px-2 py-1 text-center">{index + 1 + (currentPage - 1) * entriesPerPage}</td>
                <td className="border border-gray-600 px-2 py-1 text-center">{item.jenis}</td>
                <td className="border border-gray-600 px-2 py-1 text-center">{item.nama}</td>
                <td className="border border-gray-600 px-2 py-1 text-center">{item.jumlah}</td>
                <td className="border border-gray-600 px-2 py-1 text-center">{item.satuan}</td>
                <td className="border border-gray-600 px-2 py-1 text-center">{item.keterangan}</td>
                <td className="border border-gray-600 px-2 py-1 text-center">
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedItem(item);
                        openEditDataBahanDialog();
                      }}
                      className={`flex-1 py-2 transition-colors duration-150 rounded-md text-sm leading-none flex items-center justify-center gap-1 ${
                        !selectedItems.includes(item.id) ? 'bg-green-600 text-white' : 'bg-green-400 text-white'
                      }`}
                      disabled={selectedItems.includes(item.id)}
                    >
                      <Edit fontSize="small" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleOpenDeleteDialog(item)}
                      className={`flex-1 py-2 transition-colors duration-150 rounded-md text-sm leading-none flex items-center justify-center gap-1 ${
                        !selectedItems.includes(item.id) ? 'bg-red-600 text-white' : 'bg-red-400 text-white'
                      }`}
                      disabled={selectedItems.includes(item.id)}
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
      </div>

      <div className="p-2 flex justify-between items-center">
        <button
          onClick={openTambahDataBahanDialog}
          className="py-2 px-4 flex text-sm justify-between items-center bg-blue-600 hover:bg-blue-800 transition-colors duration-150 rounded-sm text-white leading-none gap-2"
        >
          <AddCircle fontSize="small" />
          Tambah Data Bahan Masuk
        </button>
        <div className="p-2 flex justify-between items-center">
          <button
            onClick={openMintaTambahDataBahanDialog}
            className="py-2 px-4 flex text-sm justify-between items-center bg-yellow-400 hover:bg-yellow-600 transition-colors duration-150 rounded-sm text-white leading-none gap-2"
          >
            <AddComment fontSize="small" />
            Minta Penambahan Data Bahan
          </button>
        </div>

        <div className="p-1 flex justify-between items-center gap-3">
          <button
            onClick={openTambahStokBahanDialog}
            className={`py-2 px-4 flex text-sm justify-between items-center bg-green-600 hover:bg-green-800 transition-colors duration-150 rounded-sm text-white leading-none gap-2 ${
              selectedItems.length === 0 && 'cursor-not-allowed opacity-50'
            }`}
            disabled={selectedItems.length === 0}
          >
            <AddCircle fontSize="small" />
            Tambah Stok Bahan
          </button>
          <button
            onClick={openKurangiStokBahanDialog}
            className={`py-2 px-4 flex text-sm justify-between items-center bg-orange-600 hover:bg-orange-800 transition-colors duration-150 rounded-sm text-white leading-none gap-2 ${
              selectedItems.length === 0 && 'cursor-not-allowed opacity-50'
            }`}
            disabled={selectedItems.length === 0}
          >
            <RemoveCircle fontSize="small" />
            Kurangi Stok Bahan
          </button>
        </div>
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
          className={`py-1 px-3 bg-blue-600 hover:bg-blue-800 text-white rounded-sm ${currentPage === totalPages
            && 'cursor-not-allowed opacity-50'}`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
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
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDeleteDialog} color="primary">
              Batal
            </Button>
            <Button onClick={handleConfirmDelete} color="primary" autoFocus>
              Hapus
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };
  
  export default ManajemenBahan;
  