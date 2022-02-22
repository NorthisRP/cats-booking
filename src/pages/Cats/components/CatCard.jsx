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
  Box,
} from "@mui/material";
import somecat from "../../../assets/somecat.png";
import ClearIcon from "@mui/icons-material/Clear";
import { catsStyles } from "./../style";
import { useNavigate } from "react-router-dom";
import BookButton from "../../../components/BookButton";
import { changeBook } from "../../../store/catsReducer";
import { useDispatch } from "react-redux";

export default function CatCard({ cat, openDeleteDialog }) {
  const classes = catsStyles();
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const navigate = () => {
    navigation(`/cats/${cat.id}`);
  };

  const booking = (id) => {
    dispatch(changeBook(id));
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
        <Box className={classes.iconBtn}>
          <BookButton cat={cat} changeBook={booking} />
        </Box>
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
