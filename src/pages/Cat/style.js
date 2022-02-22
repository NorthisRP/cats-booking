import { makeStyles } from "@mui/styles";

export const catStyles = makeStyles(() => ({
  card: {
    maxWidth: 400,
    minWidth: 300,
    position: "relative",
    margin: "16px auto",
  },
  infoContent: {
    backgroundColor: "#f8f8f8",
    borderRadius: "32px 32px 0 0",
    padding: 32,
  },
  infoContentDetails: {
    padding: 16,
  },
  iconBtn: {
    position: "absolute",
    top: 16,
    backgroundColor: "#1976d2",
    "&:hover": {
      backgroundColor: "#4991da",
    },
  },
  leftIcon: {
    left: 16,
  },
  rightIcon: {
    right: 16,
  },
}));
