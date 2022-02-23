import {
  AppBar,
  Dialog,
  DialogContent,
  DialogContentText,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddEditForm from "./AddEditForm";

export default function AddDialog({ open, setOpen, action, cat }) {
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
          <AddEditForm action={action} cat={cat} />
        </DialogContent>
      </Dialog>
    </>
  );
}
