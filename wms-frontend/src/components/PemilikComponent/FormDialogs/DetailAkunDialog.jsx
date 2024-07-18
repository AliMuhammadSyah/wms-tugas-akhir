import Draggable from "react-draggable";
import {  Button,  Dialog,  DialogActions,  DialogContent,  DialogContentText,  DialogTitle,  Paper,} from "@mui/material";
import { useDetailAkunDialog } from '../../../hooks/pemilik/useDialog';

const DetailAkunDialog = () => {
  const { isDetailAkunDialogOpen, closeDetailAkunDialog } = useDetailAkunDialog();
  const user = JSON.parse;

  const PaperComponent = (props) => {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  };

  return (
    <Dialog
      open={isDetailAkunDialogOpen}
      onClose={closeDetailAkunDialog}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        Detail Akun
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
       
              <p>Role: {user.role_id === 1 ? "Admin" : "Pemilik"}</p>
              <p>Nama: {user.nama}</p>
              <p>Username: {user.username}</p>
              <p>No. Hp: {user.no_hp}</p>
              <p>Alamat: {user.alamat}</p>
        
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={closeDetailAkunDialog}>
          Cancel
        </Button>
        <Button onClick={closeDetailAkunDialog}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailAkunDialog;
