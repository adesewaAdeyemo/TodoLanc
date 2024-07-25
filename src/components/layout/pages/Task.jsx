import React, { useState, createContext } from "react";
import Table from "../../element/Table";

export const ToDoContext = createContext({
  tableData: null,
  setTableData: (tableData) => {},
  showForm: false,
  setShowForm: (showForm) => {},
  currentData: null, //what is the difference between null and []
  setCurrentData: (currentData) => {},
});

export default function Task() {
  const [tableData, setTableData] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  let data = {
    title: "Tasks",
    header: [
      "S/N",
      "Title",
      "Priority",
      "Description",
      "Project",
      "Deadline",
      "Repeat",
      "Assignee",
      "Assign",
      "Status",
    ],
    rows: [
      {
        idx: 1,
        title: "Task 1",
        priority: "high",
        description: "Description 1",
        project: "Project 1",
        deadline: "12/08/2024",
        repeat: "Once",
        assignee: "Boss1",
        assign: "Friend",
        status: "Done",
      },
      {
        idx: 2,
        title: "Task 1",
        priority: "high",
        description: "Description 2",
        project: "Project 1",
        deadline: "12/08/2024",
        repeat: "Once",
        assignee: "Boss",
        assign: "Brother",
        status: "Done",
      },
      {
        idx: 3,
        title: "Task 1",
        priority: "high",
        description: "Description 3",
        project: "Project 1",
        deadline: "12/08/2024",
        repeat: "Once",
        assignee: "Boss",
        assign: "Friend",
        status: "Done",
      },
      {
        idx: 4,
        title: "Task 1",
        priority: "high",
        description: "Description 4",
        project: "Project 1",
        deadline: "12/08/2024",
        repeat: "Once",
        assignee: "Colleague",
        assign: "Friend",
        status: "Done",
      },
      {
        idx: 5,
        title: "Task 1",
        priority: "high",
        description: "Description 5",
        project: "Project 1",
        deadline: "12/08/2024",
        repeat: "Once",
        assignee: "Boss",
        assign: "Friend",
        status: "Done",
      },
      {
        idx: 6,
        title: "Task 1",
        priority: "high",
        description: "Description 6",
        project: "Project 1",
        deadline: "12/08/2024",
        repeat: "Once",
        assignee: "Friend",
        assign: "Colleague",
        status: "Done",
      },
    ],
  };

  if (!tableData) {
    setTableData(data);
  }

  return (
    <ToDoContext.Provider
      value={{ tableData, setTableData, showForm, setShowForm, currentData, setCurrentData }}
    >
      <div>
        <Table />
      </div>
    </ToDoContext.Provider>
  );
}
