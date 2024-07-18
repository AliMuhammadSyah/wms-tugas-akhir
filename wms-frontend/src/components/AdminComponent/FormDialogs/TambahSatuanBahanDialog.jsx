import Draggable from "react-draggable";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, TextField } from "@mui/material";
import { useTambahSatuanBahanDialog } from "../../../hooks/admin/useDialog";
import { ErrorMessage, Form, Formik } from "formik";
import Autocomplete from '@mui/material/Autocomplete';

const TambahSatuanBahanDialog = () => {
  const { isTambahSatuanBahanDialogOpen, closeTambahSatuanBahanDialog } = useTambahSatuanBahanDialog();

  const PaperComponent = (props) => (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );

  const initialValues = {
    namaBahan: '',
    tambahSatuanBahanBaru: ''
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form submitted with values:", values);
    setSubmitting(false);
    closeTambahSatuanBahanDialog();
  };

  const namaBahanOptions = ['Kayu Jati', 'Kayu Mahoni', 'Paku Payung', 'Paku Beton'];
  const satuanBahanOptions = ['Meter', 'Kilogram', 'Liter'];

  return (
    <Dialog
      open={isTambahSatuanBahanDialogOpen}
      onClose={closeTambahSatuanBahanDialog}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        Tambah Data Satuan Bahan
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 3 }}>
          Berikut ini merupakan formulir untuk menambahkan data Satuan Bahan.
        </DialogContentText>
        <div className="px-4 py-7 border-lg border-2 rounded-lg w-3/4 flex justify-center items-center">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values }) => (
              <Form>
                <div className="mb-6 w-full">
                  <Autocomplete
                    options={namaBahanOptions}
                    value={values.namaBahan}
                    onChange={(event, newValue) => {
                      setFieldValue('namaBahan', newValue);
                    }}
                    sx={{ width: 200 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Pilih Nama Bahan"
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                      />
                    )}
                  />
                  <ErrorMessage name="namaBahan" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="mb-6 w-full">
                  <Autocomplete
                    freeSolo
                    options={satuanBahanOptions}
                    value={values.tambahSatuanBahanBaru}
                    onChange={(event, newValue) => {
                      setFieldValue('tambahSatuanBahanBaru', newValue);
                    }}
                    onInputChange={(event, newInputValue) => {
                      setFieldValue('tambahSatuanBahanBaru', newInputValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Tambah Satuan Bahan"
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                      />
                    )}
                  />
                  <ErrorMessage name="tambahSatuanBahanBaru" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <DialogActions>
                  <Button onClick={closeTambahSatuanBahanDialog}>Cancel</Button>
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

export default TambahSatuanBahanDialog;
