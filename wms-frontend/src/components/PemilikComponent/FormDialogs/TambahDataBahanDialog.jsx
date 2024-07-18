import Draggable from "react-draggable";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  TextField
} from "@mui/material";
import { useTambahDataBahanDialog } from "../../../hooks/pemilik/useDialog";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Autocomplete from '@mui/material/Autocomplete';
import * as Yup from "yup";

const TambahDataBahanDialog = () => {
  const { isTambahDataBahanDialogOpen, closeTambahDataBahanDialog } = useTambahDataBahanDialog();

  const PaperComponent = (props) => (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );

  const initialValues = {
    jenisbahan: "",
    namabahan: "",
    satuanbahan: "",
    jumlah: "",
    keterangan: "",
  };

  const validationSchema = Yup.object({
    jenisbahan: Yup.string().required("Jenis Bahan wajib diisi"),
    namabahan: Yup.string().required("Nama Bahan wajib diisi"),
    satuanbahan: Yup.string().required("Satuan Bahan wajib diisi"),
    jumlah: Yup.number().required("Jumlah wajib diisi"),
    keterangan: Yup.string().optional(),
  });

  const jenisBahanOptions = ['Kayu', 'Paku', 'Lem'];
  const namaBahanOptions = ['Kayu Jati', 'Paku Payung', 'Lem Rajawali'];
  const satuanBahanOptions = ['m', 'ons', 'pcs'];

  const handleSubmit = (values) => {
    console.log("Form values:", values);
    closeTambahDataBahanDialog();
  };

  return (
    <Dialog
      open={isTambahDataBahanDialogOpen}
      onClose={closeTambahDataBahanDialog}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        Tambah Data Bahan
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 3 }}>
          Berikut ini merupakan formulir untuk menambah data bahan.
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
                    value={values.jenisbahan}
                    onChange={(event, newValue) => {
                      setFieldValue('jenisbahan', newValue);
                    }}
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
                  <ErrorMessage name="jenisbahan" component="div" className="text-red-500" />
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
                  <ErrorMessage name="namabahan" component="div" className="text-red-500" />
                  </div>
                  <div className="mb-6">
                  <Autocomplete
                    options={satuanBahanOptions}
                    value={values.satuanbahan}
                    onChange={(event, newValue) => {
                      setFieldValue('satuanbahan', newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Satuan Bahan"
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                      />
                    )}
                  />
                  <ErrorMessage name="satuanbahan" component="div" className="text-red-500" />
                  </div>
                <div className="mb-4">
                  <p className="text-sm tracking-wide text-zinc-400 mb-2">Jumlah</p>
                  <Field
                    name="jumlah"
                    type="number"
                    className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
                  />
                  <ErrorMessage name="jumlah" component="div" className="text-red-500" />
                </div>
                
                <div className="mb-4">
                  <p className="text-sm tracking-wide text-zinc-400 mb-2">Keterangan</p>
                  <Field
                    name="keterangan"
                    type="text"
                    className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
                  />
                  <ErrorMessage name="keterangan" component="div" className="text-red-500" />
                </div>
                
                <DialogActions>
                  <Button onClick={closeTambahDataBahanDialog} color="primary">
                    Batal
                  </Button>
                  <Button type="submit" color="primary">
                    Tambah
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

export default TambahDataBahanDialog;
