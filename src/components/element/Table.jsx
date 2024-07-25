import React, { useContext } from "react";
import Button from "./Button";
import Form from "./Form";
import { ToDoContext } from "../layout/pages/Task";

export default function Table() {
  const { tableData, setTableData, showForm, setShowForm, setCurrentData } = useContext(ToDoContext);

  const title = tableData.title ? tableData.title : "Title";
  const tableHeader = tableData.header;
  const tableRows = tableData.rows;

  const open = (uid) => {
    let id = uid * 1 + 1;
    setShowForm(!showForm);
    let data = tableRows.filter((item) => item.idx === id);

    if (data) setCurrentData(data);
    
  };

  const addNew = (e) => {
    e.preventDefault;
    setShowForm(!showForm);
  };

  const deleteTask = (e) => {
    e.stopPropagation();
    e.preventDefault;
    let id = e.target.id*1 + 1;
    setTableData({ ...tableData, rows: tableRows.filter((item) => item.idx !== id) });
  };

  const searchTaskToLower = (e) => {
    e.preventDefault;
    let search = e.target.value;

    if (search === "") return setTableData({ ...tableData, rows: tableRows });

    search = search.toLowerCase();
    setTableData({
      ...tableData, rows: tableRows.filter((item) => item.title.toLowerCase().includes(search))
  });
  };

  let header = tableHeader.map((item, idx) => (
    <th className="border px-4 py-2 font-normal text-slate-900" key={idx}>
      {item}
    </th>
  ));

  let rows = tableRows.map((item, index) => (
    <tr
      key={index}
      id={index}
      onClick={() => open(index)}
      className="cursor-pointer"
    >
      {/* it was seeing td not tr */}
      <td className="border px-4 py-2 font-normal text-slate-700">
        {index + 1}
      </td>
      <td className="border px-4 py-2 font-normal text-slate-700">
        {item.title}
      </td>
      <td className="border px-4 py-2 font-normal text-slate-700">
        {item.priority}
      </td>
      <td className="border px-4 py-2 font-normal text-slate-700">
        {item.description}
      </td>
      <td className="border px-4 py-2 font-normal text-slate-700">
        {item.project}
      </td>
      <td className="border px-4 py-2 font-normal text-slate-700">
        {item.deadline}
      </td>
      <td className="border px-4 py-2 font-normal text-slate-700">
        {item.repeat}
      </td>
      <td className="border px-4 py-2 font-normal text-slate-700">
        {item.assignee}
      </td>
      <td className="border px-4 py-2 font-normal text-slate-700">
        {item.assign}
      </td>
      <td className="border px-4 py-2 font-normal text-slate-700">
        {item.status}
      </td>
      <td className="border px-4 py-2 font-normal text-slate-700">
        <a href="#" id={index} onClick={deleteTask}>
          <Button cancel='true'></Button>
        </a>
      </td>
    </tr>
  ));

  if (!tableData) return <></>;

  return (
    <div className="">
      <h2 className="text-xl pb-3 text-slate-900">{title} Table</h2>
      <div className="border shadow-md min-w-full overflow-scroll">
        <div className="flex flex-row justify-between items-center px-5 py-2 bg-white min-w-full sticky">
          <label className="relative block w-10/12">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <i
                className="fa fa-search text-sla te-400"
                aria-hidden="true"
              ></i>
            </span>
            <input
              onChange={searchTaskToLower}
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything . . . "
              type="text"
              name="search"
            />
          </label>
          <Button onClick={addNew}>Add New</Button>
        </div>

        <table className="table-fixed min-w-full bg-white overflow-x-scroll">
          <thead className="bg-gray-100">
            <tr>
              {header}
              <th className="border px-4 py-2 font-normal text-slate-900"></th>
            </tr>
          </thead>
          <tbody>{rows && rows.length ? rows : <p className="text-center text-slate-400 italic py-2 font-thin">Table is empty ...  </p>}</tbody>
        </table>
      </div>

      {showForm ? <Form title={title} fields={tableHeader} /> : null}
    </div>
  );
}
