import React from "react";

import "./scss/app.scss";
import Home from "./Pages/Home";
import DesertsAll from "./Pages/DesertsAll";
import NotFound from "./Pages/NotFound";
import WOK from "./Pages/WOK";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deserts" element={<DesertsAll />} />
        <Route path="/WOK" element={<WOK />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
