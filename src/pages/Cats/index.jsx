import { TabContext, TabList } from "@mui/lab";
import { Box, Grid, Tab } from "@mui/material";
import React, { useEffect, useState } from "react";
import catsService from "./../../services/cats.service";
import CatCard from "./components/CatCard";

export default function Cats() {
  const [cats, setCats] = useState([]);
  const [tab, setTab] = useState("all");

  useEffect(() => {
    switch (tab) {
      case "all":
        return catsService.getAllCats(1, 20).then((res) => setCats(res.items));
      case "booked":
        return catsService.getBookedCats().then((res) => setCats(res));
      case "unbooked":
        return catsService.getNotBookedCats().then((res) => setCats(res));
      default:
        return;
    }
  }, [tab]);

  const handleTab = (event, value) => {
    setTab(value);
  };

  const bookCat = (id) => {
    catsService
      .bookCat(id)
      .then(() =>
        setCats(
          cats.map((cat) => (cat.id === id ? { ...cat, isBooked: true } : cat))
        )
      );
  };

  const unbookCat = (id) => {
    catsService
      .unbookCat(id)
      .then(() =>
        setCats(
          cats.map((cat) => (cat.id === id ? { ...cat, isBooked: false } : cat))
        )
      );
  };

  return (
    <TabContext value={tab}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleTab}>
          <Tab label="All cats" value="all" />
          <Tab label="Booked cats" value="booked" />
          <Tab label="Unbooked cats" value="unbooked" />
        </TabList>
      </Box>
      <Grid container spacing={4} style={{ padding: 24 }}>
        {cats.map((cat) => (
          <CatCard
            cat={cat}
            key={cat.id}
            bookCat={bookCat}
            unbookCat={unbookCat}
          />
        ))}
      </Grid>
    </TabContext>
  );
}
