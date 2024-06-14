import Draggable from "react-draggable";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper } from "@mui/material";
import { useEditDataPemilikDialog } from "../../../hooks/admin/useDialog";
import { ErrorMessage, Field, Form, Formik } from "formik";


const EditDataPemilikDialog = () => {
  const { isEditDataPemilikDialogOpen, closeEditDataPemilikDialog } = useEditDataPemilikDialog();

  console.log(isEditDataPemilikDialogOpen);

  const PaperComponent = (props) => {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  };

  return (
    <Dialog
      open={isEditDataPemilikDialogOpen}
      onClose={() => closeEditDataPemilikDialog()}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title">
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        Tambah Data Pemilik
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 3 }}>
          Berikut ini merupakan formulir untuk menambhakan user data pemilik.
        </DialogContentText>
        <div className="px-4 py-7 border-lg border-2 rounded-lg w-3/4 flex justify-center items-center">
          <Formik>
            <Form>
              <div className="mb-6">
                <select name="role_name" className="p-2 w-full rounded-md cursor-pointer bg-white border border-zinc-400">
                  <option value="" defaultChecked>
                    Daftar Sebagai
                  </option>
                  <option value="1">ADMIN</option>
                  <option value="2">PEMILIK</option>
                </select>
                <ErrorMessage name="username" />
              </div>
              <div className="mb-4">
                <p className="text-sm tracking-wide text-zinc-400 mb-2">Nama</p>
                <Field
                  name="nama"
                  type="text"
                  className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
                />
                <ErrorMessage name="nama" />
              </div>
              <div className="mb-4">
                <p className="text-sm tracking-wide text-zinc-400 mb-2">Username</p>
                <Field
                  name="username"
                  type="text"
                  className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
                />
                <ErrorMessage name="username" />
              </div>
              <div className="mb-4">
                <p className="text-sm tracking-wide text-zinc-400 mb-2">Password</p>
                <Field
                  name="password"
                  type="password"
                  className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
                />
                <ErrorMessage name="password" />
              </div>
              <div className="mb-4">
                <p className="text-sm tracking-wide text-zinc-400 mb-2">No. Telepon</p>
                <Field
                  name="noTelepon"
                  type="text"
                  className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
                />
                <ErrorMessage name="noTelepon" />
              </div>
              <div className="mb-8">
                <p className="text-sm tracking-wide text-zinc-400 mb-2">Alamat</p>
                <Field
                  name="alamat"
                  type="text"
                  className="border border-zinc-400 p-2 rounded-md w-full focus:outline-none focus:border-2 transition-all duration-150"
                />
                <ErrorMessage name="text" />
              </div>
            </Form>
          </Formik>
        </div>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => closeEditDataPemilikDialog()}>
          Cancel
        </Button>
        <Button onClick={() => closeEditDataPemilikDialog()}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDataPemilikDialog;