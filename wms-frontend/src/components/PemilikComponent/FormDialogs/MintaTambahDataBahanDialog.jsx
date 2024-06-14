import React from 'react';
import Draggable from 'react-draggable';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper } from '@mui/material';
import { useMintaTambahDataBahanDialog } from '../../../hooks/pemilik/useDialog';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const MintaTambahDataBahanDialog = () => {
  const { isMintaTambahDataBahanDialogOpen, closeMintaTambahDataBahanDialog } = useMintaTambahDataBahanDialog();

  const PaperComponent = (props) => {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  };

  const initialValues = {
    jenisbahan: '',
    namabahan: '',
    satuanbahan: ''
  };

  const validationSchema = Yup.object({
    jenisbahan: Yup.string().required('Jenis Bahan wajib diisi'),
    namabahan: Yup.string().required('Nama Bahan wajib diisi'),
    satuanbahan: Yup.string().required('Satuan Bahan wajib diisi')
  });

  const handleSubmit = (values) => {
    // handle form submission
    console.log(values);
    closeMintaTambahDataBahanDialog();
  };

  return (
    <Dialog
      open={isMintaTambahDataBahanDialogOpen}
      onClose={() => closeMintaTambahDataBahanDialog()}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        MintaTambah Data Bahan
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 3 }}>
          Berikut ini merupakan formulir untuk meminta data bahan.
        </DialogContentText>
        <div className="px-6 py-10 border-lg border-2 rounded-lg w-3/4 flex justify-center items-center">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <div className="mb-4">
                  <p className="text-sm tracking-wide text-zinc-400 mb-2">Jenis Bahan</p>
                  <Field
                    name="jenisbahan"
                    type="text"
                    className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
                  />
                  <ErrorMessage name="jenisbahan" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-4">
                  <p className="text-sm tracking-wide text-zinc-400 mb-2">Nama Bahan</p>
                  <Field
                    name="namabahan"
                    type="text"
                    className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
                  />
                  <ErrorMessage name="namabahan" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-4">
                  <p className="text-sm tracking-wide text-zinc-400 mb-2">Satuan Bahan</p>
                  <Field
                    name="satuanbahan"
                    type="text"
                    className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
                  />
                  <ErrorMessage name="satuanbahan" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <DialogActions>
                  <Button autoFocus onClick={() => closeMintaTambahDataBahanDialog()}>
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

export default MintaTambahDataBahanDialog;
