import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./globalStyle";
import Providers from "./Providers/providers";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <GlobalStyle />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);


