import React, { Children, createContext, useState } from 'react'


export const ToDoContext = createContext({
  // tableData: null,
  // setTableData: (tableData) => {},
  tasks: [],
  setTasks: (tasks) => {},
  showForm: false,
  setShowForm: (showForm) => {},
  currentData: null, //what is the difference between null and []
  setCurrentData: (currentData) => {},
});


export default function TodoProvider( {children} ) {
      const [tasks, setTasks] = useState([]);
      const [showForm, setShowForm] = useState(false);
      const [currentData, setCurrentData] = useState(null);
      
//   if (!tasks) {
//     return <></>;
//   }


  return (
    <ToDoContext.Provider
      value={{showForm, setShowForm, currentData, setCurrentData, tasks, setTasks }}
    >
        {Children}
    </ToDoContext.Provider>
  )
}
