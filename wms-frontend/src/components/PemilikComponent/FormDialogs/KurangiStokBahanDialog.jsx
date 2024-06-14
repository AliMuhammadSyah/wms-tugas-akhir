import React from 'react';
import Draggable from 'react-draggable';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper } from '@mui/material';
import { useKurangiStokBahanDialog } from '../../../hooks/pemilik/useDialog';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const KurangiStokBahanDialog = () => {
  const { isKurangiStokBahanDialogOpen, closeKurangiStokBahanDialog } = useKurangiStokBahanDialog();

  const PaperComponent = (props) => {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  };

  const initialValues = {
    jumlasaatini: '',
    jumlahdikurangi: '',
    jumlahakhir: ''
  };

  const validationSchema = Yup.object({
    jumlasaatini: Yup.number().required('Jumlah Saat Ini wajib diisi').positive('Jumlah harus positif').integer('Jumlah harus berupa bilangan bulat'),
    jumlahdikurangi: Yup.number().required('Jumlah Dikurangi wajib diisi').positive('Jumlah harus positif').integer('Jumlah harus berupa bilangan bulat'),
    jumlahakhir: Yup.number().required('Jumlah Akhir wajib diisi').positive('Jumlah harus positif').integer('Jumlah harus berupa bilangan bulat')
  });

  const handleSubmit = (values) => {
    // handle form submission
    console.log(values);
    closeKurangiStokBahanDialog();
  };

  return (
    <Dialog
      open={isKurangiStokBahanDialogOpen}
      onClose={() => closeKurangiStokBahanDialog()}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        Edit Data Bahan
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 3 }}>
          Berikut ini merupakan formulir untuk menambah data bahan masuk.
        </DialogContentText>
        <div className="px-4 py-7 border-lg border-2 rounded-lg w-3/4 flex justify-center items-center">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <div className="mb-4">
                  <p className="text-sm tracking-wide text-zinc-400 mb-2">Jumlah Saat Ini</p>
                  <Field
                    name="jumlasaatini"
                    type="number"
                    className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
                  />
                  <ErrorMessage name="jumlasaatini" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-4">
                  <p className="text-sm tracking-wide text-zinc-400 mb-2">Jumlah Dikurangi</p>
                  <Field
                    name="jumlahdikurangi"
                    type="number"
                    className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
                  />
                  <ErrorMessage name="jumlahdikurangi" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-4">
                  <p className="text-sm tracking-wide text-zinc-400 mb-2">Jumlah Akhir</p>
                  <Field
                    name="jumlahakhir"
                    type="number"
                    className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
                  />
                  <ErrorMessage name="jumlahakhir" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <DialogActions>
                  <Button autoFocus onClick={() => closeKurangiStokBahanDialog()}>
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

export default KurangiStokBahanDialog;
