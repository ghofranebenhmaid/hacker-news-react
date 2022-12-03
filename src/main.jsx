import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./globals.scss";
import AuthorPage from "./pages/AuthorPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/user/:id" element={<AuthorPage />} />
        <Route
          path="*"
          element={<p className="center">404 - Page Not Found</p>}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
