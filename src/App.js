import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";

import * as ROUTES from "./constants/routes"

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGN_IN} element={<p>Sign in pages</p>} />
        <Route path={ROUTES.SIGN_UP} element={<p>Sign up pages</p>} />
        <Route path={ROUTES.BROWSE} element={<p>Browse page</p>}  />
      </Routes>
    </div>
  );
}

export default App;
