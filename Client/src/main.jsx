import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import WishlistProvider from "./context/WishlistContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <WishlistProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </WishlistProvider>
    </BrowserRouter>
  </React.StrictMode>
);
