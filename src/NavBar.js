import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function NavBar() {
  return (
    <AppBar position="static" style={{ height: "64px" }} color="primary">
      <Toolbar>
        <Typography color="inherit" variant="h4">
          To Do List
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
