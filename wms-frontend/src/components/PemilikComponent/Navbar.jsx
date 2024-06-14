import { AccountCircle, KeyboardDoubleArrowLeft, Logout } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="h-full items-center grid grid-cols-2 md:grid-cols-3 shadow-sm" style={{ backgroundColor: "#1d3044" }}>
      <div className="flex justify-start md:col-span-1">
        <button>
          <KeyboardDoubleArrowLeft sx={{ color: '#fff' }} fontSize="large" />
        </button>
      </div>
      <div className="hidden md:flex justify-center md:col-span-1">
        {/* Tambahkan spasi agar ikon akun dan logout tetap terpisah */}
      </div>
      <div className="flex justify-end md:col-span-1">
        <div className="flex gap-5">
          <button>
            <AccountCircle sx={{ color: '#fff' }} fontSize="large" />
          </button>
          <button>
            <Logout sx={{ color: '#fff' }} fontSize="large" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;