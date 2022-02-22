import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import somecat from "../../../assets/somecat.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ClearIcon from "@mui/icons-material/Clear";
import { catsStyles } from "./../style";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeBook } from "./../../../store/catsReducer";
import catsService from "./../../../services/cats.service";

export default function CatCard({ cat, openDeleteDialog }) {
  const classes = catsStyles();
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const navigate = () => {
    navigation(`/cats/${cat.id}`);
  };

  const bookCat = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    catsService.bookCat(id).then(() => dispatch(changeBook(id)));
  };

  const unbookCat = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    catsService.unbookCat(id).then(() => dispatch(changeBook(id)));
  };

  return (
    <Grid item onClick={(e) => navigate(e)}>
      <Card raised className={classes.card}>
        <CardMedia
          component="img"
          src={cat?.image?.url ? cat.image?.url : somecat}
          alt="some cat"
          height={200}
        />
        <IconButton
          className={classes.iconDlt}
          onClick={(e) => openDeleteDialog(cat.id, e)}
        >
          <ClearIcon />
        </IconButton>
        {cat.isBooked ? (
          <IconButton
            className={classes.iconBtn}
            onClick={(e) => unbookCat(cat.id, e)}
          >
            <FavoriteIcon color="primary" />
          </IconButton>
        ) : (
          <IconButton
            className={classes.iconBtn}
            onClick={(e) => bookCat(cat.id, e)}
          >
            <FavoriteBorderIcon color="primary" />
          </IconButton>
        )}
        <CardContent>
          <Typography variant="h6" style={{ marginBottom: 8 }}>
            <b>{cat?.nameCat} </b> ({cat?.breed?.nameBreed})
          </Typography>
          <Stack direction="row" spacing={2}>
            <Chip
              variant="outlined"
              color="primary"
              label={`${cat.age} years`}
            />
            <Chip variant="outlined" color="primary" label={cat.color} />
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
