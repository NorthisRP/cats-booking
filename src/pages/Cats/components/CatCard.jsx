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
import { catsStyles } from "./../style";

export default function CatCard({ cat, bookCat, unbookCat }) {
  const classes = catsStyles();

  return (
    <Grid item>
      <Card raised className={classes.card}>
        <CardMedia
          component="img"
          src={cat?.image ? cat.image : somecat}
          alt="some cat"
          height={250}
        />
        {cat.isBooked ? (
          <IconButton
            className={classes.iconBtn}
            onClick={() => unbookCat(cat.id)}
          >
            <FavoriteIcon color="primary" />
          </IconButton>
        ) : (
          <IconButton
            className={classes.iconBtn}
            onClick={() => bookCat(cat.id)}
          >
            <FavoriteBorderIcon color="primary" />
          </IconButton>
        )}
        <CardContent>
          <Typography variant="h5" style={{ marginBottom: 8 }}>
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
