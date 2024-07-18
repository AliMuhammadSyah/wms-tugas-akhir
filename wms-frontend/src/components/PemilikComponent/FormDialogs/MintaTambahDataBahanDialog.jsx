import Draggable from 'react-draggable';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, TextField } from '@mui/material';
import { useMintaTambahDataBahanDialog } from '../../../hooks/pemilik/useDialog';
import { Formik, Form, ErrorMessage } from 'formik';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

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

  const jenisBahanOptions = ['Kayu', 'Paku', 'Lem'];
  const namaBahanOptions = ['Kayu Jati', 'Paku Payung', 'Lem Rajawali'];
  const satuanBahanOptions = ['m', 'ons', 'pcs'];

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
        <div className="px-6 py-10 border-lg border-2 rounded-lg w-3/4 flex justify-center items-center mb-4">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values }) => (
              <Form>
                <Stack spacing={2} sx={{ width: '100%' }}>
                  <Autocomplete 
                    freeSolo
                    options={jenisBahanOptions}
                    value={values.jenisbahan}
                    onChange={(event, newValue) => {
                      setFieldValue('jenisbahan', newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="jenisbahan"
                        label="Jenis Bahan"
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                      />
                    )}
                  />
                  <ErrorMessage name="jenisbahan" component="div" className="text-red-500" />
                  
                  <Autocomplete
                    freeSolo
                    options={namaBahanOptions}
                    value={values.namabahan}
                    onChange={(event, newValue) => {
                      setFieldValue('namabahan', newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="namabahan"
                        label="Nama Bahan"
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                      />
                    )}
                  />
                  <ErrorMessage name="namabahan" component="div" className="text-red-500" />
                
                  <Autocomplete
                    freeSolo
                    options={satuanBahanOptions}
                    value={values.satuanbahan}
                    onChange={(event, newValue) => {
                      setFieldValue('satuanbahan', newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="satuanbahan"
                        label="Satuan Bahan"
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                      />
                    )}
                  />
                  <ErrorMessage name="satuanbahan" component="div" className="text-red-500" />
                </Stack>
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
