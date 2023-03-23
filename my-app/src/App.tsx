import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegistPage from "./components/RegistPage/RegistPage";
import PrivateRounter from "./utils/router/PrivateRounter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRounter />}>
          <Route path="/" element={<HomePage name={"Gogi"} />} />
        </Route>

        <Route path="/regist" element={<RegistPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
