import Draggable from 'react-draggable';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper } from '@mui/material';
import { useTambahStokBahanDialog } from '../../../hooks/pemilik/useDialog';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const TambahStokBahanDialog = () => {
  const { isTambahStokBahanDialogOpen, closeTambahStokBahanDialog } = useTambahStokBahanDialog();

  const PaperComponent = (props) => {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  };

  const initialValues = {
    jumlasaatini: '',
    jumlahditambah: '',
    jumlahakhir: ''
  };

  const validationSchema = Yup.object({
    jumlasaatini: Yup.number().required('Jumlah Saat Ini wajib diisi').positive('Jumlah harus positif').integer('Jumlah harus berupa bilangan bulat'),
    jumlahditambah: Yup.number().required('Jumlah Ditambah wajib diisi').positive('Jumlah harus positif').integer('Jumlah harus berupa bilangan bulat'),
    jumlahakhir: Yup.number().required('Jumlah Akhir wajib diisi').positive('Jumlah harus positif').integer('Jumlah harus berupa bilangan bulat')
  });

  const handleSubmit = (values) => {
    // handle form submission
    console.log(values);
    closeTambahStokBahanDialog();
  };

  return (
    <Dialog
      open={isTambahStokBahanDialogOpen}
      onClose={() => closeTambahStokBahanDialog()}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        Edit Stok Bahan
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 3 }}>
          Berikut ini merupakan formulir untuk menambah Stok bahan masuk.
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
                  <p className="text-sm tracking-wide text-zinc-400 mb-2">Jumlah Ditambah</p>
                  <Field
                    name="jumlahditambah"
                    type="number"
                    className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
                  />
                  <ErrorMessage name="jumlahditambah" component="div" className="text-red-500 text-sm mt-1" />
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
                  <Button autoFocus onClick={() => closeTambahStokBahanDialog()}>
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

export default TambahStokBahanDialog;
