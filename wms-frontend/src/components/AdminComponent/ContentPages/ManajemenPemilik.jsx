import { useEffect, useState } from "react";
import { Delete, Edit, PersonAddSharp } from "@mui/icons-material";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField, FormControl } from "@mui/material";
import { useTambahPemilikDialog, useEditDataPemilikDialog } from "../../../hooks/admin/useDialog";
import TambahPemilikDialog from "../FormDialogs/TambahPemilikDialog";
import EditDataPemilikDialog from "../FormDialogs/EditDataPemilikDialog";
import { api } from "../../../utility/api";

const ManajemenPemilik = () => {
  const { openTambahPemilikDialog } = useTambahPemilikDialog();
  const { openEditDataPemilikDialog } = useEditDataPemilikDialog();

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [pemilikList, setPemilikList] = useState([]);

  const handleOpenDeleteDialog = (item) => {
    setSelectedItem(item);
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
    setSelectedItem(null);
  };

  const handleConfirmDelete = () => {
    // Logic untuk menghapus item
    console.log("Item deleted", selectedItem);
    setIsDeleteDialogOpen(false);
    setSelectedItem(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleEntriesChange = (event) => {
    setEntriesPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const fetchDataPemilik = async () => {
      try {
        const response = await api.get("/users"); 
        if (response.status === 200) {
          const data = await response.json(); 
          setPemilikList(data);
          console.log(data);
        } else {
          console.error("Error fetching data");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataPemilik();
  }, []);
  
  const filteredPemilikList = pemilikList.filter((pemilik) =>
    pemilik.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedData = filteredPemilikList.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const totalPages = Math.ceil(filteredPemilikList.length / entriesPerPage);

  return (
    <div className="container">
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
      <TambahPemilikDialog />
      <EditDataPemilikDialog />
      <h1 className="text-2xl mb-6 font-semibold tracking-wider">Manajemen Pemilik</h1>
      <div className="mb-4 flex justify-between items-center">
        <TextField
          label="Cari pemilik"
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={handleSearchChange}
        />
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

      <table className="table-auto w-full border-collapse border border-gray-800 bg-gray-200">
        <thead>
          <tr className="bg-gray-400">
            <th className="border border-gray-600 px-4 py-2 text-center">No</th>
            <th className="border border-gray-600 px-4 py-2 text-center">Nama Pemilik</th>
            <th className="border border-gray-600 px-4 py-2 text-center">Username</th>
            <th className="border border-gray-600 px-4 py-2 text-center">No. Telepon</th>
            <th className="border border-gray-600 px-4 py-2 text-center">Alamat</th>
            <th colSpan={2} className="border border-gray-600 px-4 py-2 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((pemilik, index) => (
            <tr key={pemilik.id}>
              <td className="border border-gray-600 px-2 py-2 text-center">
                {index + 1 + (currentPage - 1) * entriesPerPage}
              </td>
              <td className="border border-gray-600 px-2 py-2 text-center">{pemilik.nama}</td>
              <td className="border border-gray-600 px-2 py-2 text-center">{pemilik.username}</td>
              <td className="border border-gray-600 px-2 py-2 text-center">{pemilik.telepon}</td>
              <td className="border border-gray-600 px-2 py-2 text-center">{pemilik.alamat}</td>
              <td className="border border-gray-600 px-2 py-1 text-left">
              <div className="flex gap-2">               
                 <button
                  onClick={() => openEditDataPemilikDialog(pemilik)}
                  className="py-1 px-2 bg-green-600 hover:bg-green-700 transition-colors duration-150 w-full rounded text-sm text-white leading-none"
                >
                  <Edit />
                  Edit
                </button>
                <button
                  onClick={() => handleOpenDeleteDialog(pemilik)}
                  className="py-1 px-2 bg-red-600 hover:bg-red-700 transition-colors duration-150 w-full rounded text-sm text-white leading-none"
                >
                  <Delete />
                  Hapus
                </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-2 flex justify-between items-center">
        <button
          onClick={openTambahPemilikDialog}
          className="py-2 px-4 flex text-sm justify-between items-center bg-blue-800 hover:bg-blue-900 transition-colors duration-150 rounded text-white leading-none"
        >
          <PersonAddSharp fontSize="small" /> <p className="ml-5">Tambah Pemilik</p>
        </button>
        <div className="flex justify-end items-center mt-4 space-x-2">
    <button
      onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
      className="py-1 px-3 bg-blue-800 hover:bg-blue-900 text-white rounded-sm"
    >
      Previous
    </button>
    <span className="page-number border border-gray-400 rounded-sm px-3 py-1">
      {currentPage} / {totalPages}
    </span>
    <button
      onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
      className="py-1 px-3 bg-blue-800 hover:bg-blue-900 text-white rounded-sm"
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
            Apakah Anda yakin ingin menghapus item {selectedItem && selectedItem.nama} ini?
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

export default ManajemenPemilik;
