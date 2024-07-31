import React, { useEffect, useState } from 'react'
import Table from '../../element/Table';

const header = ["S/N", "Title", "Start_Date", "End_Date", "Team_Members", "Status"];

export default function Project() {
      const [projects, setProjects] = useState([]);
      const [showForm, setShowForm] = useState(false);
      const [currentData, setCurrentData] = useState(null);
      const isAdmin = true;
      useEffect(() => {
        setProjects([
          { idx: 1, title: "Tost", start_date: "02-03-2024", end_date: "04-04-2024", team_members: ["Ade", "kwn", "ns"], status: "done" },
          { idx: 2, title: "Todo ", start_date: "02-03-2024", end_date: "04-04-2024", team_members: ["Ade", "kwn", "ns"], status: "done" },
          { idx: 3, title: " List", start_date: "02-03-2024", end_date: "04-04-2024", team_members: ["Ade", "kwn", "ns"], status: "done" },
        ]);
      }, []);

  return (
    <div>
      <h2 className="text-xl pb-3">Team projects</h2>
      <Table
        showForm={showForm}
        setShowForm={setShowForm}
        currentData={currentData}
        setCurrentData={setCurrentData}
        data={projects}
        setdata={setProjects}
        tableHeader={header}
        isAdmin={isAdmin}
      />
    </div>
  );
}
