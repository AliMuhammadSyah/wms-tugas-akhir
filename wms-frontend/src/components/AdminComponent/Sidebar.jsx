import { Construction, Dashboard, Message, Person } from "@mui/icons-material";
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import { useAdminPageId } from "../../hooks/admin/useAdminPageId";

const Sidebar = () => {
  const { adminPageId, handleChangeAdminPageId } = useAdminPageId();
  
  // Define primary color
  const primaryColor = "#2f4f52"; 
  const backgroundColor = "#1d3044"; 
  return (
    <List
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: backgroundColor, // Blue background color
        borderRight: "1px solid #E7E7E7",
        padding: "16px 8px",
        color: "white", // Text color to ensure readability
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" sx={{ bgcolor: "transparent", color: "white" }} id="nested-list-subheader">
          Menu
        </ListSubheader>
      }
    >
      <ListItemButton
        sx={{
          bgcolor: adminPageId === 1 ? primaryColor : "transparent",
          color: adminPageId === 1 ? "white" : "inherit",
          '&:hover': { bgcolor: adminPageId === 1 ? primaryColor : "#2f4f52" },
          marginBottom: "4px",
          borderRadius: "8px",
        }}
        onClick={() => handleChangeAdminPageId(1)}
      >
        <ListItemIcon sx={{ color: adminPageId === 1 ? "white" : "inherit" }}>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Halaman Utama" sx={{ color: adminPageId === 1 ? "white" : "white" }} />
      </ListItemButton>

      <ListItemButton
        sx={{
          bgcolor: adminPageId === 2 ? primaryColor : "transparent",
          color: adminPageId === 2 ? "white" : "inherit",
          '&:hover': { bgcolor: adminPageId === 2 ? primaryColor : "#2f4f52" },
          marginBottom: "4px",
          borderRadius: "8px",
        }}
        onClick={() => handleChangeAdminPageId(2)}
      >
        <ListItemIcon sx={{ color: adminPageId === 2 ? "white" : "inherit" }}>
          <Person />
        </ListItemIcon>
        <ListItemText primary="Manajemen Pemilik" sx={{ color: adminPageId === 2 ? "white" : "white" }} />
      </ListItemButton>

      <ListItemButton
        sx={{
          bgcolor: adminPageId === 3 ? primaryColor : "transparent",
          color: adminPageId === 3 ? "white" : "inherit",
          '&:hover': { bgcolor: adminPageId === 3 ? primaryColor : "#2f4f52" },
          marginBottom: "4px",
          borderRadius: "8px",
        }}
        onClick={() => handleChangeAdminPageId(3)}
      >
        <ListItemIcon sx={{ color: adminPageId === 3 ? "white" : "inherit" }}>
          <Construction />
        </ListItemIcon>
        <ListItemText primary="Manajemen Data Bahan" sx={{ color: adminPageId === 3 ? "white" : "white" }} />
      </ListItemButton>

      <ListItemButton
        sx={{
          bgcolor: adminPageId === 4 ? primaryColor : "transparent",
          color: adminPageId === 4 ? "white" : "inherit",
          '&:hover': { bgcolor: adminPageId === 4 ? primaryColor : "#2f4f52" },
          marginBottom: "4px",
          borderRadius: "8px",
        }}
        onClick={() => handleChangeAdminPageId(4)}
      >
        <ListItemIcon sx={{ color: adminPageId === 4 ? "white" : "inherit" }}>
          <Message />
        </ListItemIcon>
        <ListItemText primary="Permintaan Tambah Data Bahan" sx={{ color: adminPageId === 4 ? "white" : "white" }} />
      </ListItemButton>
    </List>
  );
};

export default Sidebar;
