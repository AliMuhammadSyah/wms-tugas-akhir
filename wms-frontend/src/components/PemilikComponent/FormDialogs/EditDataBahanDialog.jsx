import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Autocomplete, TextField } from '@mui/material';
import { useEditDataBahanDialog } from '../../../hooks/pemilik/useDialog';
import { ErrorMessage, Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const EditDataBahanDialog = ({ selectedItem }) => {
  const { isEditDataBahanDialogOpen, closeEditDataBahanDialog } = useEditDataBahanDialog();
  const [loading, setLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  const PaperComponent = (props) => (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );

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

  const handleSubmit = async (values) => {
    setLoading(true);
    setSubmissionError(null);
    try {
      // handle form submission
      console.log(values);
      // simulate a server request
      await new Promise((resolve) => setTimeout(resolve, 2000));
      closeEditDataBahanDialog();
    } catch (error) {
      setSubmissionError('Error submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const jenisBahanOptions = ['Kayu', 'Paku', 'Lem'];
  const namaBahanOptions = ['Kayu Jati', 'Paku Payung', 'Lem Rajawali'];
  const satuanBahanOptions = ['m', 'ons', 'pcs'];

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
            {({ setFieldValue, values }) => (
              <Form>
                <div className="mb-6">
                  <Autocomplete
                    options={jenisBahanOptions}
                    value={values.jenisBahan}
                    onChange={(event, newValue) => setFieldValue('jenisBahan', newValue)}
                    renderInput={(params) => <TextField {...params} label="Jenis Bahan" variant="outlined" />}
                  />
                  <ErrorMessage name="jenisBahan" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-6">
                  <Autocomplete
                    options={namaBahanOptions}
                    value={values.namaBahan}
                    onChange={(event, newValue) => setFieldValue('namaBahan', newValue)}
                    renderInput={(params) => <TextField {...params} label="Nama Bahan" variant="outlined" />}
                  />
                  <ErrorMessage name="namaBahan" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-6">
                  <Autocomplete
                    options={satuanBahanOptions}
                    value={values.satuanBahan}
                    onChange={(event, newValue) => setFieldValue('satuanBahan', newValue)}
                    renderInput={(params) => <TextField {...params} label="Satuan Bahan" variant="outlined" />}
                  />
                  <ErrorMessage name="satuanBahan" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-4">
                  <p className="text-sm tracking-wide text-zinc-400 mb-2">Jumlah</p>
                  <Field
                    name="jumlah"
                    type="number"
                    className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
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
                {submissionError && <div className="text-red-500 text-sm mb-4">{submissionError}</div>}
                <DialogActions>
                  <Button autoFocus onClick={closeEditDataBahanDialog}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </div>
      </DialogContent>
    </Dialog>
  );
};

EditDataBahanDialog.propTypes = {
  selectedItem: PropTypes.shape({
    jenis: PropTypes.string,
    nama: PropTypes.string,
    satuan: PropTypes.string,
    jumlah: PropTypes.number,
    keterangan: PropTypes.string
  }).isRequired
};

export default EditDataBahanDialog;
