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

export default function Cat() {
  const [cat, setCat] = useState({});
  const params = useParams();
  const classes = catStyles();
  const navigate = useNavigate();

  useEffect(() => {
    if (params?.catId)
      catsService.getOneCat(params.catId).then((res) => setCat(res));
  }, [params]);

  return (
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
        onClick={() => {}}
      >
        <EditIcon htmlColor="white" />
      </IconButton>
      <CardContent className={classes.infoContent}>
        <Paper className={classes.infoContentDetails}>
          <Typography variant="h5">
            <b>{cat?.nameCat} </b> ({cat?.breed?.nameBreed})
          </Typography>
          <Stack direction="row" spacing={2} style={{ margin: "12px 0" }}>
            <Chip color="primary" label={`${cat.age} years`} />
            <Chip color="primary" label={cat.color} />
          </Stack>
          <Typography variant="h5">{cat?.price} RUB / hour </Typography>
        </Paper>
      </CardContent>
    </Card>
  );
}
