import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import catsService from "./../../services/cats.service";
import CatCard from "./components/CatCard";

export default function Cats() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    catsService.getAllCats(1, 20).then((res) => setCats(res.data.items));
  }, []);

  return (
    <Grid container spacing={2}>
      {cats.map((cat) => (
        <CatCard cat={cat} />
      ))}
    </Grid>
  );
}
