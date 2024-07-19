import PropTypes from 'prop-types';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, TextField } from "@mui/material";
import Draggable from "react-draggable";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup"; 
import Autocomplete from '@mui/material/Autocomplete';

const EditDataBahanDialog = ({ item, closeEditDataBahanDialog }) => {
  const PaperComponent = (props) => (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );

  const validationSchema = Yup.object().shape({
    jenisbahan: Yup.string().required("Jenis bahan wajib diisi"),
    namabahan: Yup.string().required("Nama bahan wajib diisi"),
    satuan: Yup.string().required("Satuan wajib diisi"),
  });

  const handleSubmit = async (values) => {
    try {
      console.log("Form submitted with values:", values);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      closeEditDataBahanDialog();
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const jenisBahanOptions = ['Kayu', 'Paku', 'Lem'];
  const namaBahanOptions = ['Kayu Jati', 'Paku Payung', 'Lem Rajawali'];
  const satuanBahanOptions = ['m', 'ons', 'pcs'];

  return (
    <Dialog
      open={Boolean(item)}
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
              jenisbahan: item?.jenis || '', 
              namabahan: item?.nama || '', 
              satuan: item?.satuan || '',   
            }}
            validationSchema={validationSchema} 
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values }) => (
              <Form>
                <div className="mb-6">
                  <Autocomplete
                    options={jenisBahanOptions}
                    value={values.jenisbahan}
                    onChange={(event, newValue) => {
                      setFieldValue('jenisbahan', newValue);
                    }}
                    sx={{ width: 200 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Jenis Bahan"
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                      />
                    )}
                  />
                  <ErrorMessage name="jenisbahan" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="mb-6">
                  <Autocomplete
                    options={namaBahanOptions}
                    value={values.namabahan}
                    onChange={(event, newValue) => {
                      setFieldValue('namabahan', newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Nama Bahan"
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                      />
                    )}
                  />
                  <ErrorMessage name="namabahan" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="mb-6">
                  <Autocomplete
                    options={satuanBahanOptions}
                    value={values.satuan}
                    onChange={(event, newValue) => {
                      setFieldValue('satuan', newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Satuan"
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                      />
                    )}
                  />
                  <ErrorMessage name="satuan" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <DialogActions>
                  <Button onClick={closeEditDataBahanDialog}>Batal</Button>
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

EditDataBahanDialog.propTypes = {
  item: PropTypes.shape({
    jenis: PropTypes.string,
    nama: PropTypes.string,
    satuan: PropTypes.string,
  }),
  closeEditDataBahanDialog: PropTypes.func.isRequired,
};

export default EditDataBahanDialog;
