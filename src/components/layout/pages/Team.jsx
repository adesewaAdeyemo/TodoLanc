import React, { useEffect, useState } from 'react'
import Table from '../../element/Table';
const header = [
  "S/N",
  "Name",
  "Email",
  "Role",
];

export default function Team() {

  const [members, setMembers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const isAdmin = false
    useEffect(() => {
        setMembers([
          { idx: 1, name: "Adesewa", email: "me@you.com", role: "Developer" },
          { idx: 2, name: "Deyemi", email: "me@you.com", role: "Developer" },
          { idx: 3, name: "Ade", email: "me@you.com", role: "Developer" },
        ]);
    }, []);

  return (
    <div>
      <h2 className="text-xl pb-3">Team Members</h2>
      <Table
        showForm={showForm}
        setShowForm={setShowForm}
        currentData={currentData}
        setCurrentData={setCurrentData}
        data={members}
        setdata={setMembers}
        tableHeader={header}
        isAdmin = {isAdmin}
      />
    </div>
  );
}


