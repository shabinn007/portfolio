/** @format */

import React from "react";
import Sidebar from "./pages/sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <Sidebar />
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
