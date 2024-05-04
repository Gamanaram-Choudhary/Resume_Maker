import React from "react";
// import { Link } from "react-feather";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/make" element={<Body />} />
        </Routes>
      </BrowserRouter>
      {/* <Body /> */}
    </div>
  );
}

export default App;
