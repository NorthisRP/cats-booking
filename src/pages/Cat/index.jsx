import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import catsService from "./../../services/cats.service";
import somecat from "./../../assets/somecat.png";
import { catStyles } from "./style";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import BookButton from "../../components/BookButton";
import AddDialog from "./../../components/AddDialog";

export default function Cat() {
  const [cat, setCat] = useState({});
  const [open, setOpen] = useState(false);
  const params = useParams();
  const classes = catStyles();
  const navigate = useNavigate();

  useEffect(() => {
    if (params?.catId)
      catsService.getOneCat(params.catId).then((res) => setCat(res));
  }, [params]);

  const booking = () => {
    setCat({ ...cat, isBooked: !cat.isBooked });
  };

  const editCat = (data) => {
    //почему-то нет в параметрах бэка возраста кота
    const { nameCat, price, color, nameBreed } = data;
    catsService
      .updateCat(cat.id, nameCat, price, color, nameBreed)
      .then((res) => setCat({ ...cat, ...res }));
  };

  return cat?.id ? (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        src={cat?.image?.url ? cat.image?.url : somecat}
        alt="some cat"
      />
      <IconButton
        className={`${classes.iconBtn} ${classes.leftIcon}`}
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon htmlColor="white" />
      </IconButton>
      <IconButton
        className={`${classes.iconBtn} ${classes.rightIcon}`}
        onClick={() => setOpen(true)}
      >
        <EditIcon htmlColor="white" />
      </IconButton>
      <CardContent className={classes.infoContent}>
        <Paper className={classes.infoContentDetails}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5">
              <b>{cat?.nameCat} </b> ({cat?.breed?.nameBreed})
            </Typography>
            <BookButton cat={cat} changeBook={booking} />
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            style={{ margin: "12px 0" }}
            justifyContent="flex-start"
          >
            <Chip color="primary" label={`${cat.age} years`} />
            <Chip color="primary" label={cat.color} />
          </Stack>
          <Typography variant="h6">{cat?.price} RUB / hour </Typography>
        </Paper>
      </CardContent>
      <AddDialog open={open} setOpen={setOpen} action={editCat} />
    </Card>
  ) : (
    <Typography variant="h4" textAlign="center">
      Loading cat...
    </Typography>
  );
}
