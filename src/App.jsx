import "./App.css";
import MainTpl from "./components/layout/MainTpl";
import Task from "./components/layout/pages/Task";
function App() {

  return (
    <>
      <div className="w-full">
        <MainTpl>
          <Task />
        </MainTpl>
      </div>
    </>
  );
}

export default App;
