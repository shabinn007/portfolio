/** @format */

import React from "react";
import Sidebar from "./pages/sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { Container } from "react-bootstrap";
import DarkMode from "./pages/DarkMode";
import "./App.css";

function App() {
  return (
    <div>
      <Container>
        <Sidebar />
        {/* <DarkMode /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/signup" element={<Signuppage />} /> */}
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
