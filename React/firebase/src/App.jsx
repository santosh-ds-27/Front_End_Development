import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../src/Components/Home";
import AddCard from "./Components/AddCard";
import CardList from "./Components/CardList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      {/* Navigation */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/add">Add Card</Link> |{" "}
        <Link to="/cards">Card List</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddCard />} />
        <Route path="/cards" element={<CardList />} />
      </Routes>
    </div>
  );
}

export default App;
