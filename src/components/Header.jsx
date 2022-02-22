import React from "react";
import catIcon from "../assets/catIcon.png";
import { Container, IconButton } from "@mui/material";
import { globalStyles } from "../styles";
import AddBoxIcon from "@mui/icons-material/AddBox";

export default function Header() {
  const classes = globalStyles();
  return (
    <Container className={classes.header} maxWidth="xl">
      <IconButton className={classes.rightIcon}>
        <img src={catIcon} alt="Cat-Booking" width={45} />
      </IconButton>

      <IconButton className={classes.rightIcon}>
        <AddBoxIcon fontSize="large" htmlColor="white" />
      </IconButton>
    </Container>
  );
}
