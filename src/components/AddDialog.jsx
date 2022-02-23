import {
  Alert,
  AppBar,
  Dialog,
  DialogContent,
  DialogContentText,
  IconButton,
  Snackbar,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import AddEditForm from "./AddEditForm";
import catsService from "../services/cats.service";
import { addCat } from "./../store/catsReducer";

export default function AddDialog({ open, setOpen }) {
  const [systemMessage, setSystemMessage] = useState({
    message: "",
    severity: "success",
  });

  const dispatch = useDispatch();

  const closeMessage = () => {
    setSystemMessage({ message: "" });
  };

  const createCat = (data) => {
    const { nameCat, price, color, nameBreed, age } = data;
    catsService
      .createCat(nameCat, price, color, nameBreed, age)
      .then((res) => {
        setSystemMessage({
          message: "Cat added successfully",
          severity: "success",
        });
        setOpen(false);
        dispatch(addCat(res));
      })
      .catch(() =>
        setSystemMessage({ message: "Something went wrong", severity: "error" })
      );
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={(e, reason) => {
          if (reason !== "backdropClick") setOpen(false);
        }}
        disableEnforceFocus
      >
        <AppBar style={{ position: "relative" }}>
          <Toolbar>
            <Typography variant="subtitle1">Cat data</Typography>
            <IconButton
              edge="start"
              color="inherit"
              style={{ marginLeft: "auto" }}
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <AddEditForm action={createCat} />
        </DialogContent>
      </Dialog>
      <Snackbar
        open={!!systemMessage.message}
        autoHideDuration={6000}
        onClose={closeMessage}
      >
        <Alert
          variant="filled"
          onClose={closeMessage}
          severity={systemMessage.severity}
        >
          {systemMessage.message}
        </Alert>
      </Snackbar>
    </>
  );
}
