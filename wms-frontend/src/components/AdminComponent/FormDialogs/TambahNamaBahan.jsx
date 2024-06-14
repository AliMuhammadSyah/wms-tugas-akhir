import Draggable from "react-draggable";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper } from "@mui/material";
import { useTambahNamaBahanDialog } from "../../../hooks/admin/useDialog";
import { ErrorMessage, Field, Form, Formik } from "formik";

const TambahNamaBahanDialog = () => {
  const { isTambahNamaBahanDialogOpen, closeTambahNamaBahanDialog } = useTambahNamaBahanDialog();

  console.log(isTambahNamaBahanDialogOpen);

  const PaperComponent = (props) => {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  };

  return (
    <Dialog
      open={isTambahNamaBahanDialogOpen}
      onClose={() => closeTambahNamaBahanDialog()}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title">
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        Tambah Data Nama Bahan
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 3 }}>
          Berikut ini merupakan formulir untuk menambhakan data Nama Bahan.
        </DialogContentText>
        <div className="px-4 py-7 border-lg border-2 rounded-lg w-3/4 flex justify-center items-center">
          <Formik>
            <Form>
              <div className="mb-6">
                <select name="role_name" className="p-2 w-full rounded-md cursor-pointer bg-white border border-zinc-400">
                  <option value="" defaultChecked>
                    Pilih Jenis Bahan
                  </option>
                  <option value="1">Kayu</option>
                  <option value="2">Paku</option>
                </select>
                <ErrorMessage name="username" />
              </div>
              <div className="mb-4">
                <p className="text-sm tracking-wide text-zinc-400 mb-2">Tambah Nama Bahan Baru</p>
                <Field
                  name="tambahnamabahanbaru"
                  type="text"
                  className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
                />
                <ErrorMessage name="nama" />
              </div>
            </Form>
          </Formik>
        </div>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => closeTambahNamaBahanDialog()}>
          Cancel
        </Button>
        <Button onClick={() => closeTambahNamaBahanDialog()}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TambahNamaBahanDialog;
