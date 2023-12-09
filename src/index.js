import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Text from "./components/Text";
import Init from "./components/Init";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/text" element={<Text />} />
        <Route path="/init" element={<Init />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
