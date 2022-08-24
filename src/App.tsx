import React from "react";
import { Routes, Route } from "react-router-dom";
import { Form, Header, Home, Table } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<Table />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
