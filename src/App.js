import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./layouts";
import Board from "./pages/board";
import Epic from "./pages/epic";
import Project from "./pages/project";
import Login from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>

        <Route element={<Layout />}>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/borad" element={<Board />}></Route>
          <Route path="/epic" element={<Epic />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
