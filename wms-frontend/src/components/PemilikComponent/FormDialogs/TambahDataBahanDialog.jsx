import Draggable from "react-draggable";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";
import { useTambahDataBahanDialog } from "../../../hooks/pemilik/useDialog";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const TambahDataBahanDialog = () => {
  const { isTambahDataBahanDialogOpen, closeTambahDataBahanDialog } =
    useTambahDataBahanDialog();

  console.log(isTambahDataBahanDialogOpen);

  const PaperComponent = (props) => {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  };

  const initialValues = {
    jenisbahan: "",
    namabahan: "",
    satuanbahan: "",
    jumlah: "",
    keterangan: "",
  };

  const validationSchema = Yup.object({
    jenisbahan: Yup.string().required("Jenis Bahan diperlukan"),
    namabahan: Yup.string().required("Nama Bahan diperlukan"),
    satuanbahan: Yup.string().required("Satuan Bahan diperlukan"),
    jumlah: Yup.number().required("Jumlah diperlukan").positive("Jumlah harus lebih besar dari 0"),
    keterangan: Yup.string().required("Keterangan diperlukan"),
  });

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
            <Form>
              <div className="mb-6">
                <Field
                  as="select"
                  name="jenisbahan"
                  className="p-2 w-full rounded-md cursor-pointer bg-white border border-zinc-400"
                >
                  <option value="">Jenis Bahan</option>
                  <option value="Kayu">Kayu</option>
                  <option value="Paku">Paku</option>
                  <option value="Lem">Lem</option>
                </Field>
                <ErrorMessage name="jenisbahan" component="div" className="text-red-500" />
              </div>
              <div className="mb-6">
                <Field
                  as="select"
                  name="namabahan"
                  className="p-2 w-full rounded-md cursor-pointer bg-white border border-zinc-400"
                >
                  <option value="">Nama Bahan</option>
                  <option value="Kayu Jati">Kayu Jati</option>
                  <option value="Paku Payung">Paku Payung</option>
                  <option value="Lem Rajawali">Lem Rajawali</option>
                </Field>
                <ErrorMessage name="namabahan" component="div" className="text-red-500" />
              </div>
              <div className="mb-6">
                <Field
                  as="select"
                  name="satuanbahan"
                  className="p-2 w-full rounded-md cursor-pointer bg-white border border-zinc-400"
                >
                  <option value="">Satuan Bahan</option>
                  <option value="m">m</option>
                  <option value="ons">ons</option>
                  <option value="pcs">pcs</option>
                </Field>
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
          </Formik>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TambahDataBahanDialog;
