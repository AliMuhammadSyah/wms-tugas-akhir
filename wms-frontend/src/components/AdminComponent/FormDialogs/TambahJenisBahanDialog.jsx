import Draggable from "react-draggable";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, TextField } from "@mui/material";
import { useTambahJenisBahanDialog } from "../../../hooks/admin/useDialog";
import { ErrorMessage, Form, Formik } from "formik";
import Autocomplete from '@mui/material/Autocomplete';
import * as Yup from 'yup';

const TambahJenisBahanDialog = () => {
  const { isTambahJenisBahanDialogOpen, closeTambahJenisBahanDialog } = useTambahJenisBahanDialog();

  const PaperComponent = (props) => (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );

  const initialValues = {
    jenisBahan: '',
  };

  const validationSchema = Yup.object().shape({
    jenisBahan: Yup.string().required("Jenis bahan baru wajib diisi"),
  });

  const jenisBahanOptions = ['Kayu', 'Paku'];

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form submitted with values:", values);
    setSubmitting(false);
    closeTambahJenisBahanDialog();
  };

  return (
    <Dialog
      open={isTambahJenisBahanDialogOpen}
      onClose={closeTambahJenisBahanDialog}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        Tambah Data Jenis Bahan
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 3 }}>
          Berikut ini merupakan formulir untuk menambahkan data Jenis Bahan.
        </DialogContentText>
        <div className="px-4 py-7 border-lg border-2 rounded-lg w-3/4 flex justify-center items-center">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values }) => (
              <Form>
                <div className="mb-8 w-full">
                  <Autocomplete
                    freeSolo
                    options={jenisBahanOptions}  
                    value={values.jenisBahan}
                    onChange={(event, newValue) => {
                      setFieldValue('jenisBahan', newValue);
                    }}
                    onInputChange={(event, newInputValue) => {
                      setFieldValue('jenisBahan', newInputValue);
                    }}
                    sx={{ width: 200 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Tambah Jenis Bahan"
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                      />
                    )}
                  />
                  <ErrorMessage name="jenisBahan" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <DialogActions>
                  <Button onClick={closeTambahJenisBahanDialog}>Cancel</Button>
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

export default TambahJenisBahanDialog;
