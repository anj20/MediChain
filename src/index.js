import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContractProvider } from "./context/fetch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContractProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContractProvider>
);
