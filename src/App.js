import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./layouts";
import Board from "./pages/board";
import Epic from "./pages/epic";
import Project from "./pages/project";
import Login from "./pages/login";
import NotPage from "./pages/notPage";
import Register from "./pages/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route element={<Layout />}>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/project/:id/borad" element={<Board />}></Route>
          <Route path="/project/:id/epic" element={<Epic />}></Route>
          <Route path="*" element={<NotPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
