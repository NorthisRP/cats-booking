import { makeStyles } from "@mui/styles";

export const catsStyles = makeStyles(() => ({
  card: {
    width: 220,
    position: "relative",
    transition: ".3s",

    "&:hover": {
      cursor: "pointer",
      boxShadow: "0 0 16px 0.4px black",
    },
  },
  iconBtn: { position: "absolute !important", top: 4, right: 8 },
  iconDlt: { position: "absolute !important", top: 4, left: 8 },
}));
