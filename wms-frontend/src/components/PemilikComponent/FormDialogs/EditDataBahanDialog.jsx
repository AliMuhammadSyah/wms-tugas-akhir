import React from 'react';
import Draggable from 'react-draggable';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper } from '@mui/material';
import { useEditDataBahanDialog } from '../../../hooks/pemilik/useDialog';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const EditDataBahanDialog = ({ selectedItem }) => {
  const { isEditDataBahanDialogOpen, closeEditDataBahanDialog } = useEditDataBahanDialog();

  const PaperComponent = (props) => {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  };

  const initialValues = {
    jenisBahan: selectedItem?.jenis || '',
    namaBahan: selectedItem?.nama || '',
    satuanBahan: selectedItem?.satuan || '',
    jumlah: selectedItem?.jumlah || '',
    keterangan: selectedItem?.keterangan || ''
  };

  const validationSchema = Yup.object({
    jenisBahan: Yup.string().required('Jenis Bahan wajib diisi'),
    namaBahan: Yup.string().required('Nama Bahan wajib diisi'),
    satuanBahan: Yup.string().required('Satuan Bahan wajib diisi'),
    jumlah: Yup.number().required('Jumlah wajib diisi').positive('Jumlah harus positif').integer('Jumlah harus berupa bilangan bulat'),
    keterangan: Yup.string().required('Keterangan wajib diisi')
  });

  const handleSubmit = (values) => {
    // handle form submission
    console.log(values);
    closeEditDataBahanDialog();
  };

  return (
    <Dialog
      open={isEditDataBahanDialogOpen}
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
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <div className="mb-6">
                  <Field as="select" name="jenisBahan" className="p-2 w-full rounded-md cursor-pointer bg-white border border-zinc-400">
                    <option value="" defaultChecked>
                      Jenis Bahan
                    </option>
                    <option value="Kayu">Kayu</option>
                    <option value="Paku">Paku</option>
                    <option value="Lem">Lem</option>
                  </Field>
                  <ErrorMessage name="jenisBahan" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-6">
                  <Field as="select" name="namaBahan" className="p-2 w-full rounded-md cursor-pointer bg-white border border-zinc-400">
                    <option value="" defaultChecked>
                      Nama Bahan
                    </option>
                    <option value="Kayu Jati">Kayu Jati</option>
                    <option value="Paku Payung">Paku Payung</option>
                    <option value="Lem Rajawali">Lem Rajawali</option>
                  </Field>
                  <ErrorMessage name="namaBahan" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-6">
                  <Field as="select" name="satuanBahan" className="p-2 w-full rounded-md cursor-pointer bg-white border border-zinc-400">
                    <option value="" defaultChecked>
                      Satuan Bahan
                    </option>
                    <option value="m">m</option>
                    <option value="ons">ons</option>
                    <option value="pcs">pcs</option>
                  </Field>
                  <ErrorMessage name="satuanBahan" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-4">
                  <p className="text-sm tracking-wide text-zinc-400 mb-2">Jumlah</p>
                  <Field
                    name="jumlah"
                    type="number"
                    className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
                    disabled
                  />
                  <ErrorMessage name="jumlah" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-4">
                  <p className="text-sm tracking-wide text-zinc-400 mb-2">Keterangan</p>
                  <Field
                    name="keterangan"
                    type="text"
                    className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
                  />
                  <ErrorMessage name="keterangan" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <DialogActions>
                  <Button autoFocus onClick={closeEditDataBahanDialog}>
                    Cancel
                  </Button>
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
