import React, { useState } from "react";
import catIcon from "../assets/catIcon.png";
import { Box, Container, IconButton } from "@mui/material";
import { globalStyles } from "../styles";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useNavigate } from "react-router-dom";
import AddDialog from "./AddDialog";

export default function Header() {
  const classes = globalStyles();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <Container className={classes.header} maxWidth="xl">
      <Box style={{ width: 45 }}></Box>
      <IconButton onClick={() => navigate("/cats")}>
        <img src={catIcon} alt="Cat-Booking" width={45} />
      </IconButton>
      <IconButton onClick={() => setOpen(true)}>
        <AddBoxIcon fontSize="large" htmlColor="white" />
      </IconButton>
      <AddDialog open={open} setOpen={setOpen} />
    </Container>
  );
}
