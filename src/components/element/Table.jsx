import React, {useDeferredValue, useEffect, useState } from "react";
import Button from "./Button";
import Form from "./Form";



export default function Table( props ) {
  // const { showForm, setShowForm, setCurrentData, tableRows, setTasks } =
  //   useContext(ToDoContext);
  const [showForm, setShowForm, currentData, setCurrentData, tableRows, setTableRows, tableHeader] = [props.showForm, props.setShowForm, props.currentData, props.setCurrentData, props.data, props.setdata, props.tableHeader]
  const isAdmin = props.isAdmin;
  const show = !isAdmin ? isAdmin : true; 

  const [query, setQuery] = useState("");
  const deferredValue = useDeferredValue(query);

  useEffect(() => {
    if (!deferredValue) {
      setTableRows(tableRows);
      return;
    }

    let lowerCaseValue = deferredValue.toLowerCase();

    let filteredRows = tableRows.filter((data) =>
      data.title.toLowerCase().includes(lowerCaseValue)
    );

    setTableRows(filteredRows);
  }, [deferredValue]);


  const open = (uid) => {
    let id = uid;
    setShowForm(!showForm);
    let data = tableRows.filter((item) => item.idx === id);

    if (data) setCurrentData(data);
  };


  const addNew = (e) => {
    e.preventDefault;
    console.log("add new", tableRows);
    setShowForm(!showForm);
  };


  const deleteTask = (e) => {
    e.stopPropagation();
    e.preventDefault;
    let id = e.target.id;
    // console.log(tableRows.filter((item) => item.idx !== id));
    setTableRows(tableRows.filter((item) => item.idx !== id));
  };


  let header = tableHeader.map((item, idx) => (
    <th className="border px-4 py-2 font-normal text-slate-900" key={idx}>
      {item}
    </th>
  ));


  let rows = tableRows.map((item, index) => (
    <tr
      key={index}
      id={item.idx}
      onClick={() => open(item.idx)}
      className="cursor-pointer"
    >
      {/* it was seeing td not tr */}
      {
      tableHeader.map((val, idx) => {
        let value = val.toLowerCase();
        console.log(`${item}.${value}`);
        console.log(`${item[value]}`)
        return (
          <td className="border px-4 py-2 font-normal text-slate-700" key={idx}>
            {value == "s/n" ? index + 1 : `${item[value]}`}
          </td>
        );
      })
      }
      <td className="border px-4 py-2 font-normal text-slate-700">
        <a href="#" id={item.idx} onClick={deleteTask}>
          x
        </a>
      </td>
    </tr>
  ));


  if (!tableRows) return <></>;


  return (
    <div className="">
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
              value={query}
              onInput={(e) => setQuery(e.target.value)}
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything . . . "
              type="search"
              name="search"
            />
          </label>
          <Button onClick={addNew} className={show ? '' : 'hidden'}>
            Add New
          </Button>
        </div>

        <table className="table-fixed min-w-full bg-white overflow-x-scroll">
          <thead className="bg-gray-100">
            <tr>
              {header}
              <th className="border px-4 py-2 font-normal text-slate-900"></th>
            </tr>
          </thead>
          <tbody>
            {rows && rows.length ? (
              rows
            ) : (
              <tr className="text-center text-slate-400 italic font-thin min-w-full text-nowrap py-2 px-3">
                <td colSpan={10}>No Records Found . . .</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showForm ? (
        <Form
          showForm={showForm}
          setShowForm={setShowForm}
          currentData={currentData}
          setCurrentData={setCurrentData}
          tableRows={tableRows}
          setTableRows={setTableRows}
          formField={tableHeader}
          show = {show}
        />
      ) : null}
    </div>
  );
}
