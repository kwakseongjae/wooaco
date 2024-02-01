import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import DetailPost from "./pages/posts/detail";
import NewPost from "./pages/posts/new";
import HomePage from "./pages/home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPost />} />
        <Route path="/new" element={<NewPost />} />
      </Routes>
    </>
  );
}

export default App;
