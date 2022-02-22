import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import catsService from "../services/cats.service";
import { changeBook } from "../store/catsReducer";
import { useDispatch } from "react-redux";

export default function BookButton({ cat, changeBook }) {
  const bookCat = (e) => {
    e.preventDefault();
    e.stopPropagation();
    catsService.bookCat(cat.id).then(() => changeBook(cat.id));
  };

  const unbookCat = (e) => {
    e.preventDefault();
    e.stopPropagation();
    catsService.unbookCat(cat.id).then(() => changeBook(cat.id));
  };

  return cat.isBooked ? (
    <IconButton onClick={(e) => unbookCat(e)}>
      <FavoriteIcon color="primary" />
    </IconButton>
  ) : (
    <IconButton onClick={(e) => bookCat(e)}>
      <FavoriteBorderIcon color="primary" />
    </IconButton>
  );
}
