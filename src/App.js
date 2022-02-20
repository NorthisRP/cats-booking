import React from "react";

import { Container } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/index";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Router />
      </Container>
    </BrowserRouter>
  );
}

export default App;
