import { AccountCircle, KeyboardDoubleArrowLeft, Logout } from "@mui/icons-material";
import { useDetailAkunDialog } from "../../hooks/admin/useDialog";
import DetailAkunDialog from "./FormDialogs/DetailAkunDialog";

const Navbar = () => {
  const { openDetailAkunDialog } = useDetailAkunDialog();

  return (
    <div className="h-full items-center grid grid-cols-2 shadow-sm" style={{ backgroundColor: "#1d3044" }}>
      <div className="flex justify-start">
        <button>
          <KeyboardDoubleArrowLeft fontSize="large" sx={{ color: '#ffffff' }} /> 
        </button>
      </div>
      <div>
        <DetailAkunDialog />
        <div className="flex justify-end gap-5">
          <button onClick={openDetailAkunDialog}>
            <AccountCircle fontSize="large" sx={{ color: '#ffffff' }} />
          </button>
          <button>
            
            <Logout fontSize="large" sx={{ color: '#ffffff' }} /> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
