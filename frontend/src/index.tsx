import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/GlobalStyles";
import { MyRoutes } from "./routers";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./contexts/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <GlobalStyles />
        <MyRoutes />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
