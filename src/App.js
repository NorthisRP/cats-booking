import React from "react";
import "./styles.css";
import { Container } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/index";
import { Provider } from "react-redux";
import { store } from "./store/index";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Container maxWidth="lg">
          <Router />
        </Container>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
