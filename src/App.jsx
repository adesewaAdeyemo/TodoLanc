import "./App.css";
import MainTpl from "./components/layout/MainTpl";
import Space from "./components/layout/pages/Space";
import Task from "./components/layout/pages/Task";
import { Routes, Route } from "react-router-dom";
import Team from "./components/layout/pages/Team";
import Project from "./components/layout/pages/Project";
function App() {

  return (
    <>
      <div className="w-full">
        <MainTpl>
          <Routes>
            <Route path="/" element={<Space />}></Route>
            <Route path="/todo" element={<Task />}></Route>
            <Route path="/team" element={<Team />}></Route>
            <Route path="/projects" element={<Project />}></Route>
          </Routes>
        </MainTpl>
      </div>
    </>
  );
}

export default App;
