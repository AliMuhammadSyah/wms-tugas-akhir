import { AccountCircle, KeyboardDoubleArrowLeft, Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDetailAkunDialog } from "../../hooks/admin/useDialog";
import DetailAkunDialog from "./FormDialogs/DetailAkunDialog";

const Navbar = () => {
  const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi

  const { openDetailAkunDialog } = useDetailAkunDialog();

  // Fungsi untuk logout
  const handleLogout = () => {
    // Lakukan proses logout di sini, seperti membersihkan data sesi atau token
    // Contoh:
    // 1. Hapus token dari localStorage atau sessionStorage
    // 2. Redirect ke halaman login atau halaman lain yang sesuai setelah logout
    // Contoh sederhana:
    // localStorage.removeItem('token');
    navigate('/login'); // Redirect ke halaman login setelah logout
  };

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
          <button onClick={handleLogout}>
            <Logout fontSize="large" sx={{ color: '#ffffff' }} /> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
