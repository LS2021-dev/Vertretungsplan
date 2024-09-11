import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Text from "./components/Text";
import Init from "./components/Init";
import { VertretungsplanProvider } from "./context/VertretungsplanContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <VertretungsplanProvider>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/text" element={<Text />} />
          <Route path="/init" element={<Init />} />
        </Routes>
      </HashRouter>
    </VertretungsplanProvider>
  </React.StrictMode>,
);
