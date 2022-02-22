import React from "react";

import { Container } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/index";
import { Provider } from "react-redux";
import { store } from "./store/index";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Container maxWidth="lg">
          <Router />
        </Container>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
