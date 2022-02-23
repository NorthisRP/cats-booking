import { TabContext, TabList } from "@mui/lab";
import { Box, Grid, Tab, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import catsService from "./../../services/cats.service";
import CatCard from "./components/CatCard";
import DeleteDialog from "./../../components/DeleteDialog";
import { useDispatch, useSelector } from "react-redux";
import { addCats } from "../../store/catsReducer";

export default function Cats() {
  const [tab, setTab] = useState("all");
  const [idCurrentCat, setIdCurrentCat] = useState();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const cats = useSelector((store) => store.cats);

  useEffect(() => {
    switch (tab) {
      case "all":
        return catsService
          .getAllCats(1, 20)
          .then((res) => dispatch(addCats(res.items)))
          .catch(() => dispatch(addCats([])));
      case "booked":
        return catsService
          .getBookedCats()
          .then((res) => dispatch(addCats(res)))
          .catch(() => dispatch(addCats([])));
      case "unbooked":
        return catsService
          .getNotBookedCats()
          .then((res) => dispatch(addCats(res)))
          .catch(() => dispatch(addCats([])));
      default:
        return;
    }
  }, [tab]);

  const handleTab = (event, value) => {
    setTab(value);
  };

  const openDeleteDialog = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setIdCurrentCat(id);
    setOpen(true);
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
      {cats.length ? (
        <Grid container spacing={4} style={{ padding: 24 }}>
          {cats.map((cat) => (
            <CatCard
              key={cat.id}
              cat={cat}
              openDeleteDialog={openDeleteDialog}
            />
          ))}
        </Grid>
      ) : (
        <Typography variant="h4" textAlign="center">
          No cats
        </Typography>
      )}
      <DeleteDialog open={open} setOpen={setOpen} id={idCurrentCat} />
    </TabContext>
  );
}
