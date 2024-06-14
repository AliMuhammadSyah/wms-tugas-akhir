import { Construction, Dashboard, Description } from "@mui/icons-material";
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import { usePemilikPageId } from "../../hooks/pemilik/usePemilikPageId";

const Sidebar = () => {
  const { pemilikPageId, handleChangePemilikPageId } = usePemilikPageId();
  
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
        color: "white" // Text color to ensure readability
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
          bgcolor: pemilikPageId === 1 ? primaryColor : "transparent",
          color: pemilikPageId === 1 ? "white" : "inherit",
          '&:hover': { bgcolor: pemilikPageId === 1 ? primaryColor : "#2f4f52" },
          marginBottom: "4px",
          borderRadius: "8px",
        }}
        onClick={() => handleChangePemilikPageId(1)}
      >
        <ListItemIcon sx={{ color: pemilikPageId === 1 ? "white" : "inherit" }}>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Halaman Utama" sx={{ color: pemilikPageId === 1 ? "white" : "white" }} />
      </ListItemButton>

      <ListItemButton
        sx={{
          bgcolor: pemilikPageId === 2 ? primaryColor : "transparent",
          color: pemilikPageId === 2 ? "white" : "inherit",
          '&:hover': { bgcolor: pemilikPageId === 2 ? primaryColor : "#2f4f52" },
          marginBottom: "4px",
          borderRadius: "8px",
        }}
        onClick={() => handleChangePemilikPageId(2)}
      >
        <ListItemIcon sx={{ color: pemilikPageId === 2 ? "white" : "inherit" }}>
          <Construction />
        </ListItemIcon>
        <ListItemText primary="Manajemen Data Bahan" sx={{ color: pemilikPageId === 2 ? "white" : "white" }} />
      </ListItemButton>

      <ListItemButton
        sx={{
          bgcolor: pemilikPageId === 3 ? primaryColor : "transparent",
          color: pemilikPageId === 3 ? "white" : "inherit",
          '&:hover': { bgcolor: pemilikPageId === 3 ? primaryColor : "#2f4f52" },
          marginBottom: "4px",
          borderRadius: "8px",
        }}
        onClick={() => handleChangePemilikPageId(3)}
      >
        <ListItemIcon sx={{ color: pemilikPageId === 3 ? "white" : "inherit" }}>
          <Description />
        </ListItemIcon>
        <ListItemText primary="Laporan Bahan" sx={{ color: pemilikPageId === 3 ? "white" : "white" }} />
      </ListItemButton>
    </List>
  );
};

export default Sidebar;
