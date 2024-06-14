import Draggable from "react-draggable";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper } from "@mui/material";
import { useTambahSatuanBahanDialog } from "../../../hooks/admin/useDialog";
import { ErrorMessage, Field, Form, Formik } from "formik";

const TambahSatuanBahanDialog = () => {
    const { isTambahSatuanBahanDialogOpen, closeTambahSatuanBahanDialog } = useTambahSatuanBahanDialog();

    console.log(isTambahSatuanBahanDialogOpen);
  
    const PaperComponent = (props) => {
      return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
          <Paper {...props} />
        </Draggable>
      );
    };
  
    return (
      <Dialog
        open={isTambahSatuanBahanDialogOpen}
        onClose={() => closeTambahSatuanBahanDialog()}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title">
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Tambah Data Satuan Bahan
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 3 }}>
            Berikut ini merupakan formulir untuk menambhakan data Satuan Bahan.
          </DialogContentText>
          <div className="px-4 py-7 border-lg border-2 rounded-lg w-3/4 flex justify-center items-center">
            <Formik>
              <Form>
                <div className="mb-4">
                  <p className="text-sm tracking-wide text-zinc-400 mb-2">Tambah Satuan Bahan Baru</p>
                  <Field
                    name="tambahsatuanbahanbaru"
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
          <Button autoFocus onClick={() => closeTambahSatuanBahanDialog()}>
            Cancel
          </Button>
          <Button onClick={() => closeTambahSatuanBahanDialog()}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    );
  };
  

export default TambahSatuanBahanDialog;