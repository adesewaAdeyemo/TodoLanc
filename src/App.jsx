import "./App.css";
import MainTpl from "./components/layout/MainTpl";
import Task from "./components/layout/pages/Task";
function App() {

  return (
    <>
      <div className="w-full">
        <MainTpl content={<Task />} />
      </div>
    </>
  );
}

export default App;
