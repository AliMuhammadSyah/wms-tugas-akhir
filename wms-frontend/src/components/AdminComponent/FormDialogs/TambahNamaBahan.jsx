import Draggable from "react-draggable";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, TextField } from "@mui/material";
import { useTambahNamaBahanDialog } from "../../../hooks/admin/useDialog";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup"; 
import Autocomplete from '@mui/material/Autocomplete';

const TambahNamaBahanDialog = () => {
  const { isTambahNamaBahanDialogOpen, closeTambahNamaBahanDialog } = useTambahNamaBahanDialog();

  const PaperComponent = (props) => (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );

  const initialValues = {
    jenisBahan: '',
    tambahNamaBahanBaru: ''
  };

  const validationSchema = Yup.object().shape({
    jenisBahan: Yup.string().required("Jenis bahan wajib dipilih"),
    tambahNamaBahanBaru: Yup.string().required("Nama bahan baru wajib diisi")
  });

  const jenisBahanOptions = ['Kayu', 'Paku'];
  const namaBahanOptions = ['Kayu Jati', 'Kayu Mahoni', 'Paku Payung', 'Paku Beton'];

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form submitted with values:", values);
    setSubmitting(false);
    closeTambahNamaBahanDialog();
  };

  return (
    <Dialog
      open={isTambahNamaBahanDialogOpen}
      onClose={closeTambahNamaBahanDialog}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        Tambah Data Nama Bahan
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 3 }}>
          Berikut ini merupakan formulir untuk menambahkan data Nama Bahan.
        </DialogContentText>
        <div className="px-4 py-7 border-lg border-2 rounded-lg w-3/4 flex justify-center items-center">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values }) => (
              <Form>
                <div className="mb-6 w-full">
                  <Autocomplete
                    options={jenisBahanOptions}
                    value={values.jenisBahan}
                    onChange={(event, newValue) => {
                      setFieldValue('jenisBahan', newValue);
                    }}
                    sx={{ width: 200 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Pilih Jenis Bahan"
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                      />
                    )}
                  />
                  <ErrorMessage name="jenisBahan" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="mb-6 w-full">
                  <Autocomplete
                    freeSolo
                    options={namaBahanOptions}
                    value={values.tambahNamaBahanBaru}
                    onChange={(event, newValue) => {
                      setFieldValue('tambahNamaBahanBaru', newValue);
                    }}
                    onInputChange={(event, newInputValue) => {
                      setFieldValue('tambahNamaBahanBaru', newInputValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Tambah Nama Bahan"
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                      />
                    )}
                  />
                  <ErrorMessage name="tambahNamaBahanBaru" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <DialogActions>
                  <Button onClick={closeTambahNamaBahanDialog}>Cancel</Button>
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

export default TambahNamaBahanDialog;
