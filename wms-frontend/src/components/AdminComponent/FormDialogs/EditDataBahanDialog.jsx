import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper } from "@mui/material";
import Draggable from "react-draggable";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup"; // Import Yup

const EditDataBahanDialog = ({ item, closeEditDataBahanDialog }) => {
  const PaperComponent = (props) => {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  };

  // Skema validasi menggunakan Yup
  const validationSchema = Yup.object().shape({
    jenisbahan: Yup.string().required("Jenis bahan wajib diisi"),
    namabahan: Yup.string().required("Nama bahan wajib diisi"),
    satuan: Yup.string().required("Satuan wajib diisi"),
  });

  return (
    <Dialog
      open={Boolean(item)} // Buka dialog hanya jika item yang akan diedit ada
      onClose={closeEditDataBahanDialog}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        Edit Data Bahan
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 3 }}>
          Berikut ini merupakan formulir untuk mengedit data bahan.
        </DialogContentText>
        <div className="px-4 py-7 border-lg border-2 rounded-lg w-3/4 flex justify-center items-center">
          <Formik
            initialValues={{ 
              jenisbahan: item?.jenis || '', // Inisialisasi nilai jenis bahan
              namabahan: item?.nama || '', // Inisialisasi nilai nama bahan
              satuan: item?.satuan || '',   // Inisialisasi nilai satuan
            }}
            validationSchema={validationSchema} // Terapkan skema validasi
            onSubmit={(values) => {
              // Handle submit formik di sini
              console.log("Form submitted with values:", values);
              closeEditDataBahanDialog(); // Tutup dialog setelah submit
            }}
          >
            {({ values }) => (
              <Form>
                <div className="mb-6">
                  <select
                    name="jenisbahan"
                    value={values.jenisbahan} // Tampilkan nilai yang dipilih
                    className="p-2 w-full rounded-md cursor-pointer bg-white border border-zinc-400"
                  >
                    <option value="" disabled>
                      Jenis Bahan
                    </option>
                    <option value="Kayu">Kayu</option>
                    <option value="Paku">Paku</option>
                    {/* Tambah opsi jenis bahan lainnya jika ada */}
                  </select>
                  <ErrorMessage name="jenisbahan" component="div" className="text-red-500" /> {/* Ubah warna pesan kesalahan menjadi merah */}
                </div>
                <div className="mb-4">
                  <p className="text-sm tracking-wide text-zinc-400 mb-2">Nama Bahan</p>
                  <Field
                    name="namabahan"
                    type="text"
                    className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
                  />
                  <ErrorMessage name="namabahan" component="div" className="text-red-500" /> {/* Ubah warna pesan kesalahan menjadi merah */}
                </div>
                <div className="mb-4">
                  <p className="text-sm tracking-wide text-zinc-400 mb-2">Satuan</p>
                  <Field
                    name="satuan"
                    type="text"
                    className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
                  />
                  <ErrorMessage name="satuan" component="div" className="text-red-500" /> {/* Ubah warna pesan kesalahan menjadi merah */}
                </div>
                <DialogActions>
                  <Button onClick={closeEditDataBahanDialog}>Cancel</Button>
                  <Button type="submit">Submit</Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditDataBahanDialog;
