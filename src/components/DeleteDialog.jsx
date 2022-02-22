import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteLocalCat } from "../store/catsReducer";
import catsService from "./../services/cats.service";

export default function DeleteDialog({ id, open, setOpen }) {
  const [systemMessage, setSystemMessage] = useState({
    message: "",
    severity: "success",
  });
  const dispatch = useDispatch();

  const deleteCat = () => {
    catsService
      .deleteCat(id)
      .then(() => {
        setOpen(false);
        setSystemMessage({
          message: "Cat deleted successfully",
          severity: "success",
        });
        dispatch(deleteLocalCat(id));
      })
      .catch(() => {
        setOpen(false);
        setSystemMessage({
          message: "Something went wrong",
          severity: "error",
        });
      });
  };

  const closeMessage = () => {
    setSystemMessage({ message: "" });
  };

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)} disableEnforceFocus>
        <DialogTitle>Delete cat</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the cat?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={(e) => setOpen(false)}>Close</Button>
          <Button onClick={deleteCat}>Delete</Button>
        </DialogActions>
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
