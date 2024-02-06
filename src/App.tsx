import { Routes, Route } from "react-router-dom";
import HomePage from "@pages/home";
import NewPost from "@pages/posts/new";
import DetailPost from "@pages/posts/detail";
import "./App.css";

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
