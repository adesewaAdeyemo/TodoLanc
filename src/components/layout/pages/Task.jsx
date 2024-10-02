import React, { useState } from "react";
import Table from "../../element/Table";

const header = [
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
];

export default function Task() {

  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const isAdmin = true;

  if (!tasks) {
    return <></>
  }

  return (
    <div>
      <h2 className="text-xl pb-3">Tasks</h2>
      <Table
        showForm={showForm}
        setShowForm={setShowForm}
        currentData={currentData}
        setCurrentData={setCurrentData}
        data={tasks}
        setdata={setTasks}
        tableHeader={header}
        isAdmin={isAdmin}
      />
    </div>
  );
}
